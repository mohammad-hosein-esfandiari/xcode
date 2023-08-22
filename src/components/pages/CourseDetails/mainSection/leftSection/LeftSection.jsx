import dynamic from 'next/dynamic';

import Image from "next/image";

import Price from "./Price";
import LeftBoxDetails from "./LeftBoxDetails";
const BuyButton = dynamic(() => import('./BuyButton'), {
  ssr: false,
});
const LeftSection = ({courseDetail}) => {
  const { lesson,cost,students,startDate,endDate,title,_id} = courseDetail
 
  return (
    <ul className="md:w-[38%] w-[98.2%] mx-auto  h-fit md:mt-[-80px] rounded-md bg-box-color p-5 shadow-modeShadow ">
      <li>
        <Image
          src={lesson.image}
          alt=""
          width={200}
          height={200}
          className="rounded-md w-full h-full object-cover object-center"
        />
      </li>
      <li>
        <LeftBoxDetails endDate={endDate} startDate={startDate} studentsCount={students.length}/>
        <ul className="md:px-8 px-4 mt-3 grid md:grid-cols-1 gap-x-7 gap-y-2 grid-cols-1 ss:grid-cols-2">
          <Price  cost={cost}/>
          <div className="md:block hidden">

          <BuyButton image={lesson.image} courseId={_id}  title={title} users={students} cost={cost} />
          </div>
        </ul>
      </li>
    </ul>
  );
};

export default LeftSection;
