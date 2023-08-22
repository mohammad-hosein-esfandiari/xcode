import CourseBoxWrapper from "./CourseBoxWrapper";
import FIrstCourseBox from "./FIrstCourseBox";
import PaginationHolder from "./PaginationHolder";

const MainSection = ({ posts }) => {
  return (
    <>
      <section className="xl:container lg:px-[100px] sm:px-6 px-4 pb-6">
        <CourseBoxWrapper>
          <FIrstCourseBox posts={posts}></FIrstCourseBox>
        </CourseBoxWrapper>
      </section>
      {posts && <PaginationHolder />}
    </>
  );
};

export default MainSection;
