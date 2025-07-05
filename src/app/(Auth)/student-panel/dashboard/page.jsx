import Dashboard from "@/components/pages/StudentPanel/dashboard/Dashboard";
import dbConnect from "@/lib/dbConnect.";
import Course from "@/models/Course";

async function getPosts() {
  await dbConnect();
  const posts = await Course.find({});
  return JSON.parse(JSON.stringify(posts));
}

const StudentDashboardPage = async () => {
  const posts = await getPosts();

  return (
    <>
      <Dashboard posts={posts} />
    </>
  );
};

export default StudentDashboardPage;
