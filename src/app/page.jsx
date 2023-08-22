import { Header } from "@/layout/Header/Header";

import dynamic from "next/dynamic";
import Landing from "@/components/pages/Home/Landing";
import Footer from "@/layout/Footer/Footer";
const ProgressBar = dynamic(() => import('@/layout/ProrgressBar/ProgressBar'), {
  ssr: false,
});
// import ProgressBar from "@/layout/ProrgressBar/ProgressBar";
import ScrollBug from "@/components/common/ScrollBug";
import Transition from "@/components/common/Transition";
import AnimTrue from "@/components/common/AnimTrue";
import PopState from "@/components/common/PopState";
const URL = process.env.NEXT_PUBLIC_BASE_URL
async function getPosts() {
  const res = await fetch(URL+"/course/getall",{cache:'no-store'});
  const posts = await res.json();
  return posts;
}
async function getNews() {
  const res = await fetch(URL+"/news",{cache:'no-store'});
  const posts = await res.json();
  return posts;
}
async function getTeachers() {
  const res = await fetch(URL+"/employee/getallteachers",{cache:'no-store'});
  const teachers = await res.json();
  return teachers;
}

export default async function Home() {
  const posts = await getPosts();
  const news = await getNews();
  const teachers = await getTeachers();
  return (
    <>
      <AnimTrue />
      <ScrollBug />
      <ProgressBar />
      <Header />
      <Landing teachers={teachers.result} news={news.result.reverse().slice(0,8)} posts={posts.result.reverse().slice(0,12)} />
      <Footer />
    </>
  );
}
