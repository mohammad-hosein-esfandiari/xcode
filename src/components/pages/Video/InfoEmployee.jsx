import Image from "next/image";
import teacher1 from "@/assets/images/unknown.png";
const InfoEmployee = ({
  title,
  teacherName,
  teacherExpertise,
  teacherProfile,
  lessonName,
}) => {
  return (
    <ul className=" pl-4">
      <li className="py-2 text-[18px] text-mode-color font-bold" >
        {/* <h1>{title.split('|')[0]+" | "+lessonName+" | "+headlineText+" | "+text}</h1> */}
        <h1>{title + " | " + lessonName}</h1>
      </li>
      <li className="flex items-center">
        <div>
          <Image
            src={teacherProfile === "image.png" ? teacher1 : teacherProfile}
            width={50}
            height={50}
            alt="ostad"
            className="rounded-full w-[40px] h-[40px]"
          />
        </div>
        <ul className="flex h-full flex-col justify-between py-1 pl-2">
          <li className="text-[14px] text-mode-color">Master {teacherName}</li>
          <li className="text-mode-color opacity-50 text-[10px]" >{teacherExpertise}</li>
        </ul>
      </li>
    </ul>
  );
};

export default InfoEmployee;
