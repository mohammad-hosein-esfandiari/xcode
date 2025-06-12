import { Header } from "@/layout/Header/Header";

import dynamic from "next/dynamic";
import Landing from "@/components/pages/Home/Landing";
import Footer from "@/layout/Footer/Footer";
const ProgressBar = dynamic(() => import("@/layout/ProrgressBar/ProgressBar"), {
  ssr: false,
});
// import ProgressBar from "@/layout/ProrgressBar/ProgressBar";
import ScrollBug from "@/components/common/ScrollBug";
import Transition from "@/components/common/Transition";
import AnimTrue from "@/components/common/AnimTrue";
import PopState from "@/components/common/PopState";
import { toast } from "react-toastify";
import dbConnect from "@/lib/dbConnect";
import Course from "@/models/Course";
import News from "@/models/News";
import User from "@/models/User";

async function getAllCourses() {
  await dbConnect();
  const data = await Course.find({});
  return JSON.parse(JSON.stringify(data));
}

async function getAllNews() {
  await dbConnect();
  const data = await News.find({});
  return JSON.parse(JSON.stringify(data));
}

async function getTeachers() {
  await dbConnect();
  const data = await User.find({ role: "teacher" });
  return JSON.parse(JSON.stringify(data));
}

export default async function Home() {
  const courses = await getAllCourses();
  const news = await getAllNews();
  const teachers = await getTeachers();

  return (
    <>
      <AnimTrue />
      <ScrollBug /> 
      <ProgressBar />
      <Header />
      <Landing posts={courses} teachers={teachers} news={news} />
      <Footer />
    </>
  );
}

{
  /* <Landing teachers={teachers.result} news={news.result.reverse().slice(0,8)} posts={posts.result.reverse().slice(0,12)} /> */
}
