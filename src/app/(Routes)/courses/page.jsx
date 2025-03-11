import AnimTrue from "@/components/common/AnimTrue";
import PopState from "@/components/common/PopState";
import ScrollBug from "@/components/common/ScrollBug";
import Hero from "@/components/common/hero/Hero";
import Courses from "@/components/pages/Courses/Courses";
import FilteringRow from "@/components/pages/Courses/MainSection/FilteringRow";
import MainSection from "@/components/pages/Courses/MainSection/MainSection";
import { notFound } from "next/navigation";

async function getPosts() {
  const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL+"courses", {
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
      <Hero params={params} title="Courses" />
      <FilteringRow posts={posts.reverse()} />
      <MainSection posts={posts.reverse()} />
    </>
  );
};

export default CoursesPage;
