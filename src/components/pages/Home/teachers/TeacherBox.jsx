import border from "@/assets/images/border-shape.png";
import teacher from "@/assets/images/instructor2.png";
import Image from "next/image";
import unknown from "@/assets/images/user.jpg";


import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";

const TeacherBox = ({ fullName,profile }) => {
  const checkTeacherWork = (name) => {
    let text;
    if (name.includes("اسفندیاری")) {
      text = "فرانت اند";
    }
    if (name.includes("اصغری")) {
      text = "بک اند";
    }
    if (name.includes("محمدحسین")) {
      text = "هوش مصنوعی";
    }
    if (name.includes("نظری")) {
      text = "دیزاین و سئو";
    }
    return text;
  };
  const teacherWork = checkTeacherWork(fullName);
  return (
    <ul className="relative z-10 md:mb-0 mb-8">
      <li className="relative z-10 group cursor-pointer ">
        <ul  className=" overflow-hidden rounded-md shadow-modeShadow relative">
          <li className="    relative">
            <div className="w-full hlg:h-[340px] lg:h-[300px] md:h-[240px] sm:h-[400px] ss:h-[300px] xs:h-[270px] h-[380px] overflow-hidden ">

            <Image
              src={profile === "image.png" ? unknown : profile }
              width={500}
              height={500}
              alt="teacher"
              className="w-full h-full object-cover object-center"
            />
            </div>
            <div className="absolute bg-gray-500 transition-all duration-500 opacity-0  group-hover:opacity-50 w-full h-full top-0 ">
              {" "}
            </div>
          </li>
          <li
            className="flex rounded-full justify-center z-10 items-center w-full h-full absolute top-0 right-0
               [&>i]:bg-white [&>i]:text-primary [&>i]:rounded-full hlg:[&>i]:p-5 lg:[&>i]:p-3 md:[&>i]:p-2 ss:[&>i]:p-5 sss:[&>i]:p-3 [&>i]:p-[2.5px] [&>i]:opacity-0 group-hover:[&>i]:opacity-100 [&>i]:transition [&>i]:duration-700 [&>i]:delay-100
                  ">
            <i className="hlg:text-[25px] hover:bg-primary hover:text-white xs:text-[18px]">
              <BsTwitter />
            </i>
            <i className="hlg:text-[25px] hover:bg-primary hover:text-white xs:text-[18px]  lg:mx-2 sm:mx-[8px] sss:mx-2 mx-[1px]">
              <FaFacebookF />
            </i>
            <i className="hlg:text-[25px] hover:bg-primary hover:text-white xs:text-[18px]   ">
              <TiSocialLinkedin className="scale-[1.3] " />
            </i>
          </li>
        </ul>
        {/* <ul>
          <Image
            src={border}
            alt=""
            className={`absolute top-0 w-full z-2 group-hover:rotate-90 transition-all duration-1000`}
          />
        </ul> */}
      </li>
      <li className="text-center py-5">
        <span className="font-bold lg:text-[20px] md:text-[16px] ss:text-[20px] xs:text-[16px] text-[20px] text-textColor">
          استاد {fullName}
        </span>
        <h4 className="text-color-gray mt-2 text-[12px]">
          کارشناس {teacherWork}
        </h4>
      </li>
    </ul>
  );
};

export default TeacherBox;
