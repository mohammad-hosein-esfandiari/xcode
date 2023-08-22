import Link from "next/link";
import ImgHolder from "../courseBox/ImgHolder";
import FirstRow from "../courseBox/FirstRow";
import SecondRow from "../courseBox/SecondRow";
import LastRow from "../courseBox/LastRow";
import LinkCp from "../LinkCp";

const CourseBox2 = ({title,popular,price,level}) => {
  return (
    <LinkCp
      href="/courses/javascript"
      className="group bg-box-color h-[250px] hover:translate-y-[-3px] ss:flex justify-between transition-all duration-500 bg-white shadow-modeShadow rounded-md overflow-hidden">
      <ImgHolder level={level} versian={2} />
      <div className="px-6 ss:w-1/2 h-full flex flex-col justify-between">
        <div className="flex-1 flex flex-col justify-between">

        <FirstRow  title={title}/>
        <SecondRow popular={popular} />
        </div>
        <LastRow price={price} />
      </div>
    </LinkCp>
  );
};

export default CourseBox2;
