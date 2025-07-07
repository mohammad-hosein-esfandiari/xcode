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


async function getAllCourses() {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "courses", {
      cache: "no-store",
    });

    // Check if the response is OK (status code 200-299)
    if (!res.ok) {
      throw new Error(`Failed to fetch data`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to load data:", error.message);
    throw error; // Re-throw the error to handle it in the calling function
  }
}


async function getAllNews() {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "news", {
      cache: "no-store",
    });

    // Check if the response is OK (status code 200-299)
    if (!res.ok) {
      throw new Error(`Failed to fetch data`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to load data:", error.message);
    throw error; // Re-throw the error to handle it in the calling function
  }
}
async function getTeachers() {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "teachers", {
      cache: "no-store",
    });

    // Check if the response is OK (status code 200-299)
    if (!res.ok) {
      throw new Error(
        `Failed to fetch teachers`
      );
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to load data:", error.message);
    throw error; // Re-throw the error to handle it in the calling function
  }
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
