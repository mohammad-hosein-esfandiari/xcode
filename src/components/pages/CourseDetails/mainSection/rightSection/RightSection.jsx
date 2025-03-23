import { swipeTab } from "@/constant/swipeTapItem";
import AccordionHolder from "./accordion/AccordionHolder";
import CommentBox from "./comments/CommentBox";
import CourseTitle from "./CourseTitle";
import Summery from "./Summery";
import SwipeBox from "./SwipeBox";
import TeacherDetail from "./TeacherDetail";
import AnimWrapper from "./AnimWrapper";
import { useUserInfo } from "@/context/userInfoStore";
import InActiveCp from "@/components/common/InActiveCp";

const RightSection = ({ courseDetail, allComments,teacher }) => {
  const { title, lessons, _id, students,description } = courseDetail;
  const userInfo = useUserInfo.getState().userInfo;

  return (
    <ul className=" md:w-[58%] overflow-hidden w-full py-4 flex flex-col">
      <TeacherDetail teacher={teacher} />
      <CourseTitle title={title} />
      <SwipeBox
        swipeItem={swipeTab}
        swipeClass="bg-[#a1a1a124] grid-cols-3"
        spanColor="bg-primary">
        <AnimWrapper>
          <Summery desc={description} />
        </AnimWrapper>
        <AnimWrapper>
      
            <AccordionHolder
              students={students}
              lessons={lessons}
              headlines={lessons.title}
            />
        </AnimWrapper>
        <AnimWrapper>
          {/* <CommentBox allComments={allComments} courseId={_id} /> */}
        </AnimWrapper>
      </SwipeBox>
    </ul>
  );
};

export default RightSection;
