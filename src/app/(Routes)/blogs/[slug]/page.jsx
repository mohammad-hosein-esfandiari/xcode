
import AnimTrue from "@/components/common/AnimTrue";
import BlogsDetail from "@/components/pages/BlogsDetail/BlogsDetail";
const URL = "https://api.xcode.sepehracademy.ir/api"

async function getNewsById(id) {
    const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL+"news/"+id,{cache:'no-store'});
    const post = await res.json();
    return post;
  }
  async function getNews() {
    const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL+"news",{cache:'no-store'});
    const news = await res.json();
    return news;
  }
const BlogsDetailPage = async ({params}) => {
    const post = await getNewsById(params.slug) 
    const news = await getNews();
    return (
        <>
        <AnimTrue/>
            <BlogsDetail news={news.reverse()} post={post}/>
            

        </>
    );
}

export default BlogsDetailPage;