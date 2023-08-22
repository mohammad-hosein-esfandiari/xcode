import Image from "next/image";
import CategoryItems from "./CategoryItems";
import SearchInput from "./SearchInput";
import Title from "./Title";

import blogRightImg from "@/assets/images/blogRightImg.png";
import PopularSubjects from "./PopularSubjects";
import LastPosts from "./LastPosts";

const RightSection = ({news,lastCourses}) => {
  return (
    <div className="sm:pl-5">
      {/* <Title title="بگرد و پیدا کن" />
      <SearchInput /> */}
      <Title title="دسته بندی" />
      <CategoryItems news={news} />
      <Title title="دوره های اخیر" />
      <LastPosts lastCourses={lastCourses}/>
      <Image
        src={blogRightImg}
        alt="اخبار و مقالات"
        className="rounded-md sm:block hidden mx-auto"
      />
      <Title title="محبوب ترین موضوعات" />
      <PopularSubjects />
    </div>
  );
};

export default RightSection;
