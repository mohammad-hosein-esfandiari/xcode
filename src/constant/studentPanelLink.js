import { RxDashboard } from "react-icons/rx";
import { RiUserSettingsLine } from "react-icons/ri";
import { MdOutlineBookmarks } from "react-icons/md";
import { FaRegListAlt } from "react-icons/fa";

export const studentTabLink =[
    {
        id:1,
        text:'داشبورد',
        href:'dashboard',
        icon: <RxDashboard />
    },
    {
        id:2,
        text:'ویرایش پروفایل',
        href:'edit-profile',
        icon: <RiUserSettingsLine />
    },
    {
        id:3,
        text:'دوره های من',
        href:'my-courses?limit=6&page=1',
        icon: <MdOutlineBookmarks />
    },
    {
        id:4,
        text:'لیست دوره ها',
        href:'courses-list?limit=6&page=1&filter=newest',
        icon: <FaRegListAlt />
    },
]