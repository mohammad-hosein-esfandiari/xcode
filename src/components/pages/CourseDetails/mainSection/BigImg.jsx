import Image from "next/image";
import courseBg from "@/assets/images/course-02big.png";

const BigImg = () => {
    return (
        <li className=" w-full overflow-hidden md:h-[550px] sm:h-[350px] h-[200px]">
        <Image
          src={courseBg}
          alt=""
          className="rounded-md w-full h-full object-cover object-center"
        />
      </li>
    );
}

export default BigImg;