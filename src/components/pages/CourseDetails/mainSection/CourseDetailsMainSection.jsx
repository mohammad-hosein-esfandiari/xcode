import BigImg from "./BigImg";
import LeftSection from "./leftSection/LeftSection";
import FixedBtn from "./leftSection/FixedBtn";
import RightSection from "./rightSection/RightSection";
import ReactQueryProvider from "@/components/common/ReactQueryProvider";

const CourseDetailsMainSection = ({courseDetail,allComments}) => {
  return (
    <div className="flex flex-col pt-4">
      <BigImg />
      <div className="lg:pl-[40px] flex md:justify-between md:flex-row flex-col items-center md:items-start">
        <ReactQueryProvider>

        <RightSection allComments={allComments} courseDetail={courseDetail} />
        </ReactQueryProvider>
        <LeftSection courseDetail={courseDetail} />
        <FixedBtn courseDetail={courseDetail}/>
      </div>
    </div>
  );
};

export default CourseDetailsMainSection;
