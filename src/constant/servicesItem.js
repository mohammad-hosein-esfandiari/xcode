import { TbLicense } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { FiPhoneCall } from "react-icons/fi";
import { BiChalkboard } from "react-icons/bi";

export const servicesItem = [
    {
        id:1,
        title:"مدرک معتبر",
        icon:<TbLicense/>,
        
    },
    {
        id:2,
        title:"مشاوره رایگان",
        icon:<BiSupport/>,
        
    },
    {
        id:3,
        title:"پشتیبانی 24 ساعته",
        icon:<FiPhoneCall/>,
        
    },
    {
        id:4,
        title:"برگذاری کارگاه های رایگان",
        icon:<BiChalkboard className="text-textColor " />,
        
    },
]