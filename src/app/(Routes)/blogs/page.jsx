import AnimTrue from "@/components/common/AnimTrue";
import Blogs from "@/components/pages/Blogs/Blogs";

async function getNews() {
  const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "news", {
    cache: "no-store",
  });
  const news = await res.json();
  return news;
}
async function getPosts() {
  const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "courses", {
    cache: "no-store",
  });
  const posts = await res.json();
  return posts;
}
const BlogsPage = async () => {
  const news = await getNews();
  const posts = await getPosts();
  return (
    <main>
      <AnimTrue />
      <Blogs lastCourses={posts.reverse().slice(0, 3)} news={news} />
    </main>
  );
};

export default BlogsPage;
