import { Redis } from "@upstash/redis";

let store = new Map();

// Initialize Redis if credentials are available
const redis = process.env.UPSTASH_REDIS_URL
  ? new Redis({
      url: process.env.UPSTASH_REDIS_URL,
      token: process.env.UPSTASH_REDIS_TOKEN,
    })
  : null;

const WINDOW_SIZE = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS = 5; // 5 attempts per window

export async function rateLimit(ip) {
  const now = Date.now();
  const key = `ratelimit:${ip}`;

  try {
    if (redis) {
      // Using Redis
      const result = await redis.get(key);
      if (result) {
        const attempts = JSON.parse(result);
        if (attempts.length >= MAX_REQUESTS) {
          const oldestAttempt = attempts[0];
          if (now - oldestAttempt < WINDOW_SIZE) {
            return {
              success: false,
              retryAfter: Math.ceil((WINDOW_SIZE - (now - oldestAttempt)) / 1000),
            };
          }
          attempts.shift();
        }
        attempts.push(now);
        await redis.set(key, JSON.stringify(attempts), { ex: Math.ceil(WINDOW_SIZE / 1000) });
      } else {
        await redis.set(key, JSON.stringify([now]), { ex: Math.ceil(WINDOW_SIZE / 1000) });
      }
    } else {
      // Using Memory store
      const attempts = store.get(key) || [];
      const validAttempts = attempts.filter(timestamp => now - timestamp < WINDOW_SIZE);

      if (validAttempts.length >= MAX_REQUESTS) {
        return {
          success: false,
          retryAfter: Math.ceil((WINDOW_SIZE - (now - validAttempts[0])) / 1000),
        };
      }

      validAttempts.push(now);
      store.set(key, validAttempts);

      // Cleanup old entries periodically
      if (store.size > 10000) {
        const oldEntries = [];
        store.forEach((value, key) => {
          if (!value.some(timestamp => now - timestamp < WINDOW_SIZE)) {
            oldEntries.push(key);
          }
        });
        oldEntries.forEach(key => store.delete(key));
      }
    }

    return { success: true };
  } catch (error) {
    console.error("Rate limiting error:", error);
    // If rate limiting fails, allow the request to proceed
    return { success: true };
  }
} 