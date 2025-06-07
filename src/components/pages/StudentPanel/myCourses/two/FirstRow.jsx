import Image from "next/image";
import bannercourse from "@/assets/images/bannercourse.png";
import { SlNotebook } from "react-icons/sl";
import { TbClock } from "react-icons/tb";
import FirstRowText from "./FirstRowText";
const FirstRow = ({image,lessons,endDate,startDate,duration}) => {
    return (
        <ul className="flex lg:flex-row flex-col lg:mb-4">
        <li className="lg:w-1/2 rounded-lg lg:h-[150px] ss:h-[300px] h-[200px] overflow-hidden">
          <Image
            className="w-full h-full object-center object-cover"
            alt="course"
            width={1000}
            height={1000}
            src={image}
          />
        </li>
        <FirstRowText endDate={endDate} duration={duration} startDate={startDate} lessons={lessons} />
    
      </ul>
    );
}

export default FirstRow;