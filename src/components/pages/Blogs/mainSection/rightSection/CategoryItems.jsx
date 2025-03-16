'use client'

import { useSearchParamsInUrl } from "@/hooks/useSearchParamsInUrl";
import Link from "next/link";

const CategoryItems = ({news}) => {
  const { limit, page ,category} = useSearchParamsInUrl();
    const filterByCategory = (category)=> news.filter(item => item.category.toLowerCase() === category)

   const categoryItemsInfo = [
    {
        id:1,
        title:"All",
        link:"all",
        count:news.length
    },
    {
        id:2,
        title:"Frontend",
        link:"frontend",
        count:filterByCategory("frontend").length
    },
    {
        id:3,
        title:"Backend",
        link:"backend",
        count:filterByCategory("backend").length
    },
    {
        id:4,
        title:"Python",
        link:"python",
        count:filterByCategory("python").length
    },
    {
        id:5,
        title:"Seo & Design",
        link:"s&d",
        count:filterByCategory("seo & design").length
    },
    {
        id:5,
        title:"Ai",
        link:"ai",
        count:filterByCategory("ai").length
    },
    {
        id:6,
        title:"Miscellaneous",
        link:"miscellaneous",
        count:filterByCategory("miscellaneous").length
    },
 
]

    return (
        <>
                {
      categoryItemsInfo.map((item,index)=>(
        <Link href={`/blogs?limit=${limit}&page=${page}&category=${item.link}`} key={item.id} className={`${index < categoryItemsInfo.length-1 && 'mb-4'} border-b-[1px] hover:pl-4 ${item.link == category && " text-primary pl-4 font-bold border-primary border-b-[2px]"} transition-all hover:text-primary hover:border-primary hover:font-bold cursor-pointer duration-500 border-[#77777789] pb-4 text-[14px] text-[#8e8e8e] flex justify-between items-center`}>
        <li>{item.title}</li>
        <li>({(item.count)})</li>
    </Link>
      ))
    }
        </>
    );
}

export default CategoryItems;