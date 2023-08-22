import Link from "next/link";
import FirstRow from "./FirstRow";
import ImgHolder from "./ImgHolder";
import SecondRow from "./SecondRow";
import LastRow from "./LastRow";
import CourseBoxAnim from "./CourseBoxAnim";
import LinkCp from "../LinkCp";
const CourseBox = ({ title,likedCount,students,disLikedCount, cost, _id, delay ,lesson}) => {
  return (
    <CourseBoxAnim delay={delay}>
      <LinkCp
        href={"/courses/"+_id}
        className=" Tilt-inner flex flex-col h-[445px] justify-between bg-box-color shadow-modeShadow  rounded-md overflow-hidden">
        <ImgHolder img={lesson.image} level={lesson.lessonName} versian={1} />
        <div className="px-4 flex-1 flex flex-col h-[1/2] justify-between">
          <div className="flex-1 flex flex-col justify-between">
            <FirstRow lesson={lesson} title={title} />
            <SecondRow courseId={_id} disLikedCount={disLikedCount} likeCount={likedCount} />
          </div>
          <LastRow studentCount={students.length+247} price={cost} />
        </div>
      </LinkCp>
    </CourseBoxAnim>
  );
};

export default CourseBox;
