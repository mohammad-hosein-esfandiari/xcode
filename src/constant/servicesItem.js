import { TbLicense } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { FiPhoneCall } from "react-icons/fi";
import { BiChalkboard } from "react-icons/bi";

export const servicesItem = [
    {
        id:1,
        title:"Valid Certificate",
        icon:<TbLicense/>,
        
    },
    {
        id:2,
        title:"Free Consultation",
        icon:<BiSupport/>,
        
    },
    {
        id:3,
        title:"24 Hour Support",
        icon:<FiPhoneCall/>,
        
    },
    {
        id:4,
        title:"Holding Free Workshops",
        icon:<BiChalkboard className="text-textColor " />,
        
    },
]