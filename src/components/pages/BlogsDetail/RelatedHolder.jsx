'use client'
import LinkCp from "@/components/common/LinkCp";
import { checkRelatedNews } from "@/core/utils/checkRealtedNews";
import Link from "next/link";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

const RelatedHolder = ({news,newsId}) => {
 
  const {nextId,nextText,prevId,prevText} = checkRelatedNews(newsId,news)


  return (
    <div className="pt-24 sm:gap-8 gap-4  grid sm:grid-cols-2">
      <LinkCp href={`/blogs/${nextId}`}  className="sm:p-8 p-4 text-mode-color cursor-pointer leading-8 font-bold flex items-center bg-[#dcdcdc55] rounded-[4px] hover:bg-primary hover:shadow-modeShadow hover:scale-[1.01] transition-all duration-300  hover:text-white">
        <MdOutlineKeyboardArrowRight className="mr-4 text-[40px]"/>
        <h2 className="sm:text-[18px] flex-1 text-center text-[14px]">{nextText}</h2>
      </LinkCp>
      <LinkCp href={`/blogs/${prevId}`} className="sm:p-8 p-4 text-mode-color flex-row-reverse cursor-pointer leading-8 font-bold flex items-center bg-[#dcdcdc55] rounded-[4px] hover:bg-primary hover:shadow-modeShadow hover:scale-[1.01] transition-all duration-300  hover:text-white">
        <MdOutlineKeyboardArrowLeft className="ml-4 text-[40px]"/>
        <h2 className="sm:text-[18px] flex-1 text-center text-[14px]">{prevText}</h2>
      </LinkCp>

    </div>
  );
};

export default RelatedHolder;
