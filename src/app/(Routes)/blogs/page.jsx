import AnimTrue from "@/components/common/AnimTrue";
import Blogs from "@/components/pages/Blogs/Blogs";
const URL = "https://api.xcode.sepehracademy.ir/api"

async function getNews() {
  const res = await fetch(URL+"/news",{cache:'no-store'});
  const news = await res.json();
  return news;
}
async function getPosts() {
  const res = await fetch(URL+"/course/getall",{cache:'no-store'});
  const posts = await res.json();
  return posts;
}
const BlogsPage = async () => {
  const news = await getNews();
  const posts = await getPosts();


  return (
    <main>
      <AnimTrue/>
        <Blogs lastCourses={posts.result.reverse().slice(0,3)} news={news.result}/>
    </main>
  );
};

export default BlogsPage;
