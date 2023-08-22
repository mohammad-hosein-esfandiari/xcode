import { GoClock } from "react-icons/go";
import { BsPlayCircle, BsCalendar2Event } from "react-icons/bs";
import { TbSchool } from "react-icons/tb";
export const courseDetailsSalesBoxItems = [
    {
        id:1,
        title:'زمان دوره',
        desc:'۱۰ ساعت و ۳۲ دقیقه',
        icon: <GoClock  />
    },
    {
        id:2,
        title:'تعداد دانشجو',
        desc:'۲۵۰',
        icon: <TbSchool  />
    },
    {
        id:3,
        title:'وضعیت دوره',
        desc:'در حال برگزاری',
        icon: <BsPlayCircle  />
    },
    {
        id:4,
        title:'پایان دوره',
        desc:'۱۲/۲/۱۴۰۱',
        icon: <BsCalendar2Event  />
    },
]