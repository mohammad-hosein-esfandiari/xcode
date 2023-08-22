'use client'

import { useSearchParamsInUrl } from "@/hooks/useSearchParamsInUrl";
import Link from "next/link";

const CategoryItems = ({news}) => {
  const { limit, page ,category} = useSearchParamsInUrl();
    const filterByCategory = (category)=> news.filter(item => item.title.split('|')[1] === category)

   const categoryItemsInfo = [
    {
        id:1,
        title:"همه",
        link:"all",
        count:news.length
    },
    {
        id:2,
        title:"فرانت اند",
        link:"frontend",
        count:filterByCategory("frontend").length
    },
    {
        id:3,
        title:"بک اند",
        link:"backend",
        count:filterByCategory("backend").length
    },
    {
        id:4,
        title:"پایتون",
        link:"python",
        count:filterByCategory("python").length
    },
    {
        id:5,
        title:"متفرقه",
        link:"miscellaneous",
        count:filterByCategory("miscellaneous").length
    },
 
]

    return (
        <>
                {
      categoryItemsInfo.map((item,index)=>(
        <Link href={`/blogs?limit=${limit}&page=${page}&category=${item.link}`} key={item.id} className={`${index < categoryItemsInfo.length-1 && 'mb-4'} border-b-[1px] hover:pr-4 ${item.link == category && " text-primary pr-4 font-bold border-primary border-b-[2px]"} transition-all hover:text-primary hover:border-primary hover:font-bold cursor-pointer duration-500 border-[#77777789] pb-4 text-[14px] text-[#8e8e8e] flex justify-between items-center`}>
        <li>{item.title}</li>
        <li>({(item.count).toLocaleString('fa-IR')})</li>
    </Link>
      ))
    }
        </>
    );
}

export default CategoryItems;