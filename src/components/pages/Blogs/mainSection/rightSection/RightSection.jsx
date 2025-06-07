import Image from "next/image";
import CategoryItems from "./CategoryItems";
import SearchInput from "./SearchInput";
import Title from "./Title";

import blogRightImg from "@/assets/images/blogRightImg.png";
import PopularSubjects from "./PopularSubjects";
import LastPosts from "./LastPosts";

const RightSection = ({ news, lastCourses }) => {
  return (
    <div className="sm:pr-5">
      {/* <Title title="بگرد و پیدا کن" />
      <SearchInput /> */}
      <Title title="Category" />
      <CategoryItems news={news} />
      <Title title="Recent Course" />
      <LastPosts lastCourses={lastCourses} />
      <Image
        src={blogRightImg}
        alt="news & articles"
        className="rounded-md sm:block hidden mx-auto"
      />
      <Title title="Most Popular Topics" />
      <PopularSubjects />
    </div>
  );
};

export default RightSection;
