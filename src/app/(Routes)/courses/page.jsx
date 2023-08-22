import AnimTrue from "@/components/common/AnimTrue";
import PopState from "@/components/common/PopState";
import ScrollBug from "@/components/common/ScrollBug";
import Hero from "@/components/common/hero/Hero";
import Courses from "@/components/pages/Courses/Courses";
import FilteringRow from "@/components/pages/Courses/MainSection/FilteringRow";
import MainSection from "@/components/pages/Courses/MainSection/MainSection";
import { notFound } from "next/navigation";
const URL = process.env.NEXT_PUBLIC_BASE_URL

async function getPosts() {
  const res = await fetch(URL+"/course/getall", {
    cache: "no-store",
  });
  if(!res.ok) notFound()
  const posts = await res.json();
  return posts;
}
const CoursesPage = async ({ searchParams, params }) => {
  const posts = await getPosts();
  return (
    <>
      <AnimTrue />
      <ScrollBug />
      <Hero params={params} title="دوره ها" />
      <FilteringRow posts={posts.result.reverse()} />
      <MainSection posts={posts.result.reverse()} />
    </>
  );
};

export default CoursesPage;
