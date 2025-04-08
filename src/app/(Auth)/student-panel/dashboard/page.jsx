import Dashboard from "@/components/pages/StudentPanel/dashboard/Dashboard";

async function getPosts() {
  const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL+"courses",{cache:'no-store'});
  const posts = await res.json();
  return posts;
}
const StudentDashboardPage = async () => {
  const posts = await getPosts();

    return (
        <>
            <Dashboard posts={posts}/>
        </>
    );
}

export default StudentDashboardPage;