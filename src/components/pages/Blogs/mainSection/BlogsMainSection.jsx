import LeftSection from "./leftSection/LeftSection";
import RightSection from "./rightSection/RightSection";


const BlogsMainSection = ({ news ,newsArray,firstArray,lastCourses}) => {



  return (
    <div className="sm:grid flex flex-col-reverse sm:grid-cols-3">
      <RightSection lastCourses={lastCourses} news={news} />
      <LeftSection firstArray={firstArray} posts={news} news={newsArray} />
    </div>
  );
};

export default BlogsMainSection;
