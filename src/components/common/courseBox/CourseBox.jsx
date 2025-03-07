import Link from "next/link";
import FirstRow from "./FirstRow";
import ImgHolder from "./ImgHolder";
import SecondRow from "./SecondRow";
import LastRow from "./LastRow";
import CourseBoxAnim from "./CourseBoxAnim";
import LinkCp from "../LinkCp";
const CourseBox = ({ title,likedCount,image,students,duration,disLikedCount,level, cost, _id, delay ,lessons}) => {
  return (
    <CourseBoxAnim delay={delay}>
      <LinkCp
        href={"/courses/"+_id}
        className=" Tilt-inner flex flex-col h-[445px] justify-between bg-box-color shadow-modeShadow  rounded-md overflow-hidden">
        <ImgHolder img={"/../../../"+image} level={level} versian={1} />
        <div className="px-4 flex-1 flex flex-col h-[1/2] justify-between">
          <div className="flex-1 flex flex-col justify-between">
            <FirstRow lessons={lessons} duration={duration} title={title} />
            <SecondRow courseId={_id} disLikedCount={disLikedCount} likeCount={likedCount} />
          </div> 
          <LastRow studentCount={students.length} price={cost} />
        </div> 
      </LinkCp>
    </CourseBoxAnim> 
  );
};

export default CourseBox;
