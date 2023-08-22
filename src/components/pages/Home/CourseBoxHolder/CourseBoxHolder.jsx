import CourseBox from "@/components/common/courseBox/CourseBox";
import SectionTitle from "../SectionTitle";
import CourseboxSmallerIcon from "./CourseboxSmallerIcon";
import SkeletonBox from "./SkeletonBox";

const CourseBoxHolder = ({ posts }) => {
  return (
    <div id="courses">
      <SectionTitle
        title="جدیدترین دوره ها"
        link="courses?limit=12&page=1&filter=newest"
      />
      <div className="bg-linear1 ">
        <section className="xl:container relative py-16">
          <CourseboxSmallerIcon />
          <div className="grid  gap-y-10 gap-x-6  xl:gap-x-8 grid-cols-1 ss:grid-cols-2 md:grid-cols-3 hlg:grid-cols-4 xl:grid-cols-4 xl:container lg:px-[100px] px-8  ">
            <SkeletonBox array={posts.length} posts={posts} />
          </div>
          {/* <div className=" grid hlg:hidden gap-y-10 gap-x-6  xl:gap-x-8 grid-cols-1 ss:grid-cols-2 md:grid-cols-3 hlg:grid-cols-4 xl:grid-cols-4 xl:container lg:px-[100px] px-8  ">
            <SkeletonBox array={6} posts={posts} />
          </div> */}
          <div
            dir="rtl"
            className="absolute w-full top-[64px] grid gap-y-10 gap-x-6  xl:gap-x-8 grid-cols-1 ss:grid-cols-2 md:grid-cols-3 hlg:grid-cols-4 xl:grid-cols-4 xl:container lg:px-[100px] px-8  ">
            {posts.map((item, index) => (
              <CourseBox key={item._id} delay={index} {...item} />
            ))}
          </div>
          {/* <div
            dir="rtl"
            className="absolute w-full top-[64px] grid  gap-y-10 gap-x-6  xl:gap-x-8 grid-cols-1 ss:grid-cols-2 md:grid-cols-3 hlg:grid-cols-4 xl:grid-cols-4 xl:container lg:px-[100px] px-8  ">
            {posts.splice(0, 6).map((item, index) => (
              <>
                <CourseBox key={item.id} delay={index} {...item} />
              </>
            ))}
          </div> */}
        </section>
      </div>
    </div>
  );
};

export default CourseBoxHolder;
