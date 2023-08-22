
import AnimTrue from "@/components/common/AnimTrue";
import BlogsDetail from "@/components/pages/BlogsDetail/BlogsDetail";
const URL = process.env.NEXT_PUBLIC_BASE_URL

async function getNewsById(id) {
    const res = await fetch(URL+"/news/"+id,{cache:'no-store'});
    const post = await res.json();
    return post;
  }
  async function getNews() {
    const res = await fetch(URL+"/news",{cache:'no-store'});
    const news = await res.json();
    return news;
  }
const BlogsDetailPage = async ({params}) => {
    const post = await getNewsById(params.slug)
    const news = await getNews();
    return (
        <>
        <AnimTrue/>
            <BlogsDetail news={news.result.reverse()} post={post.result}/>
            

        </>
    );
}

export default BlogsDetailPage;