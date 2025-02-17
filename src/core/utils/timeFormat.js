function formatDuration(minutes) {
    const hours = Math.floor(minutes / 60); // محاسبه‌ی ساعت
    const remainingMinutes = minutes % 60; // محاسبه‌ی دقیقه‌ی باقی‌مانده
  
    if (hours > 0 && remainingMinutes > 0) {
      return `${hours} hours & ${remainingMinutes} minutes`;
    } else if (hours > 0) {
      return `${hours} hours`;
    } else {
      return `${remainingMinutes} minutes`;
    }
  }
  
  export default formatDuration