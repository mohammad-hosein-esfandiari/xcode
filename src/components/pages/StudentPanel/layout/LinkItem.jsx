'use client'
import { useUrlArray } from "@/hooks/useUrlArray";
import Link from "next/link";

const LinkItem = ({text,href,icon}) => {
  const { path } = useUrlArray();


  return (
    <Link href={`/student-panel/${href}`} className={`lg:mr-8 hlg:pr-[50px] lg:pr-6 ${path.includes(href.split('?')[0]) ?'bg-registerbg text-mode-color' : ' text-pl-white hover:bg-[#5679bf27]'} transition-all duration-300 ss:px-0 px-3 ss:mb-3 flex rounded-b-lg ss:rounded-bl-none ss:rounded-r-lg  items-center justify-center lg:justify-start py-3 `}>
      <div className={`text-[25px] `}>
        {icon}
      </div>
      <span className="mr-4 lg:block hidden text-[20px] ">{text}</span>
    </Link>
  );
};

export default LinkItem;
