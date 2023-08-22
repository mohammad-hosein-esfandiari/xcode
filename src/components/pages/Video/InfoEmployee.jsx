import Image from "next/image";
import teacher1 from "@/assets/images/unknown.png";
const InfoEmployee = ({
  title,
  teacherName,
  teacherEmail,
  text,
  teacherProfile,
  lessonName,
  headlineText
}) => {
  return (
    <ul className=" pr-4">
      <li className="py-2 text-[18px] text-mode-color font-bold" >
        <h1>{title.split('|')[0]+" | "+lessonName+" | "+headlineText+" | "+text}</h1>
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
        <ul className="flex h-full flex-col justify-between py-1 pr-2">
          <li className="text-[14px] text-mode-color">استاد {teacherName}</li>
          <li className="text-mode-color opacity-50 text-[10px]" >{teacherEmail}</li>
        </ul>
      </li>
    </ul>
  );
};

export default InfoEmployee;
