import Dashboard from "@/components/pages/StudentPanel/dashboard/Dashboard";
const URL = process.env.NEXT_PUBLIC_BASE_URL
async function getPosts() {
  const res = await fetch(URL+"/course/getall",{cache:'no-store'});
  const posts = await res.json();
  return posts;
}
const StudentDashboardPage = async () => {
  const posts = await getPosts();

    return (
        <>
            <Dashboard posts={posts.result}/>
        </>
    );
}

export default StudentDashboardPage;