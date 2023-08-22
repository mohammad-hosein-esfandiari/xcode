
import LinkCp from "@/components/common/LinkCp";
import Link from "next/link";

import { HiOutlineArrowSmLeft } from "react-icons/hi";

const SectionTitle = ({ title, link }) => {
    return (
        <div className="xl:container sm:py-16 py-8 sm:px-[100px]">
        <div className="w-fit mx-auto flex  border-gray-300 px-8 py-2">
          {/* <span className=" bg-primary w-[5px] shadow-lg rounded-md block"></span> */}
          <div className="px-4">
            <h2 className="w-fit mx-auto text-primary drop-shadow-text sm:text-[35px] text-[28px]">
              {title}
            </h2>
            {link && (
              <LinkCp href={`/${link}`} className="flex items-center mt-2 hover:scale-[1.05] transition-all duration-300 w-[100%] justify-center">
                <span className="pl-2 text-textColor ">مشاهده همه</span>
                <HiOutlineArrowSmLeft className="text-textColor" />
              </LinkCp>
            )}
          </div>
        </div>
      </div>
    );
}

export default SectionTitle;