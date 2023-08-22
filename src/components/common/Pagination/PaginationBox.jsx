'use client'

import { useSearchParamsInUrl } from "@/hooks/useSearchParamsInUrl";
import { useRouter } from "next/navigation";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const PaginationBox = ({pageCount,advanced,bgNone,href,pageSize,pageNumber}) => {
    const { queryArray, limit, page , pagnumber , pagsize} = useSearchParamsInUrl();
    const pageNum = pageNumber ? Number(pagnumber) : Number(page)
  // const paginationLength =  Math.ceil(Number(pageCount) / Number(limit))
  const paginationLength =  4

  const router = useRouter();

    const arr = [...Array(pageCount).keys()]
    const pageClick = (number) =>{
        if (queryArray) {
            router.push(`/${href}?limit=${pageSize ? 6 : limit}&page=${number}&filter=${queryArray.join("_")}`);
          } else {
            router.push(`/${href}?limit=${pageSize ? 6 : limit}&page=${number}`);
          }
          window.scrollTo(0, 0);
    }
    return (
        <div className={`w-full  flex items-center justify-center ${bgNone ? bgNone : "bg-linear2 py-10"} `}>
          <ul dir="ltr" className="flex   flex-wrap w-fit items-center">
            {pageNum !=1 && <li onClick={()=>pageClick(pageNum-1)} className="mx-1 hover:bg-primary hover:text-white text-mode-color p-2 flex items-center justify-center cursor-pointer rounded-full  bg-[#d1d1d19e] w-[40px] h-[40px]"><IoChevronBack/></li>}
            {pageNum >=3 && paginationLength > 3 && <li onClick={()=>pageClick(1)} className={` text-mode-color  mx-1 p-4 flex  items-center justify-center cursor-pointer rounded-full  hover:bg-primary hover:text-white bg-[#d1d1d19e] w-[40px] h-[40px]`}>۱</li>}
            {pageNum >=3 && paginationLength > 3 && (<li className={`  mx-1 p-4 flex  text-mode-color items-center justify-center rounded-full  bg-[#d1d1d19e] w-[40px] h-[40px]`}>...</li>)}
            {pageNum < 3 && paginationLength >4 &&  (<>{arr.slice(0,3).map((item,index) => (<li onClick={()=>pageClick(item+1)} className={`${pageNum== item+1 ? "bg-primary text-white text-mode-color hover:bg-primary " :  "hover:bg-[#d1d1d1bf] bg-[#d1d1d19e]"}  mx-1 p-4 flex  items-center justify-center cursor-pointer rounded-full  w-[40px] h-[40px]`}>{(item+1).toLocaleString('fa-IR')}</li>))}</>)}
            
            {pageNum <4 && paginationLength < 4 && (<>   {
                Array(paginationLength).fill().map((item,index) => (
                    <li onClick={()=>pageClick(index+1)} className={`${pageNum== index+1 ? "bg-primary text-white text-mode-color hover:bg-primary " :  "hover:bg-[#d1d1d1bf] bg-[#d1d1d19e]"}  mx-1 p-4 flex  items-center justify-center cursor-pointer rounded-full  w-[40px] h-[40px]`}>{(index+1).toLocaleString('fa-IR')}</li>
                ))
            }</>) }
            {pageNum <4 && paginationLength > 4 && (<>   {
                arr.slice(pageNum-2,pageNum+1).map((item,index) => (
                    <li onClick={()=>pageClick(item+1)} className={`${pageNum== item+1 ? "bg-primary text-white text-mode-color hover:bg-primary " :  "hover:bg-[#d1d1d1bf] bg-[#d1d1d19e]"}  mx-1 p-4 flex  items-center justify-center cursor-pointer rounded-full  w-[40px] h-[40px]`}>{(item+1).toLocaleString('fa-IR')}</li>
                ))
            }</>) }
            {pageNum <= paginationLength-3 && pageNum>= 3 &&  (<>{arr.slice(pageNum-2,pageNum+1).map((item,index) => (<li onClick={()=>pageClick(item+1)} className={`${pageNum== item+1 ? "bg-primary text-white text-mode-color hover:bg-primary " :  "hover:bg-[#d1d1d1bf] bg-[#d1d1d19e]"}  mx-1 p-4 flex  items-center justify-center cursor-pointer rounded-full  w-[40px] h-[40px]`}>{(item+1).toLocaleString('fa-IR')}</li>))}</>)}

            {pageNum <= paginationLength-3 && paginationLength > 4 && (<><li className={` mx-1 p-4 flex  text-mode-color items-center justify-center  rounded-full  w-[40px] bg-[#d1d1d19e] h-[40px]`}>...</li><li onClick={()=>pageClick(paginationLength)} className={` hover:bg-primary hover:text-white bg-[#d1d1d19e] mx-1 p-4 flex  items-center justify-center cursor-pointer rounded-full  w-[40px] text-mode-color h-[40px]`}>{paginationLength.toLocaleString('fa-IR')}</li></>)}
            {pageNum >  paginationLength-3 && paginationLength > 4 && (<>{arr.slice(paginationLength-4).map((item,index) => (<li onClick={()=>pageClick(item+1)} className={`${pageNum== item+1 ? "bg-primary text-white text-mode-color hover:bg-primary " :  "hover:bg-[#d1d1d1bf] bg-[#d1d1d19e]"}  mx-1 p-4 flex  items-center justify-center cursor-pointer rounded-full  w-[40px] h-[40px]`}>{(item+1).toLocaleString('fa-IR')}</li>))}</>) }
            {pageNum != paginationLength && <li onClick={()=>pageClick(pageNum+1)} className="mx-1  p-2 flex items-center justify-center cursor-pointer rounded-full  text-mode-color w-[40px] bg-[#d1d1d19e] hover:bg-primary hover:text-white h-[40px]"><IoChevronForward className=""/></li> }
          </ul>
        </div>
    );
}

export default PaginationBox;