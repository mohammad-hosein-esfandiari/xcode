import { ImLinkedin2 } from "react-icons/im";
import { TbBrandTelegram } from "react-icons/tb";
import { FaPinterestP } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { RxDoubleArrowRight } from "react-icons/rx";
import { TiLocation } from "react-icons/ti";
import { AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
export const icons = [
  {
    id: 1,
    icon: <ImLinkedin2 />,
  },
  {
    id: 2,
    icon: <TbBrandTelegram />,
  },
  {
    id: 3,
    icon: <FaPinterestP />,
  },
  {
    id: 4,
    icon: <AiOutlineTwitter />,
  },
];

export const footerCenterItems = [
  {
    id:1,
    title: "Explore",
    size:"50%",
    child: [
      {
        id: 1,
        href: "/",
        text: "About Us",
        icon: <RxDoubleArrowRight />,
      },
      {
        id: 2,
        href: "/",
        text: "Upcoming Events",
        icon: <RxDoubleArrowRight />,
      },
      {
        id: 3,
        href: "/news",
        text: "Blog & News",
        icon: <RxDoubleArrowRight />,
      },
      {
        id: 4,
        href: "/",
        text: "FAQ Question",
        icon: <RxDoubleArrowRight />,
      },
      {
        id: 5,
        href: "/",
        text: "Testimonial",
        icon: <RxDoubleArrowRight />,
      },
    ],
  },
  {
    id:2,
    title: "Useful Links",
    size:"50%",
    child: [
      {
        id: 1,
        href: "/",
        text: "Contact Us",
        icon: <RxDoubleArrowRight />,
      },
      {
        id: 2,
        href: "/",
        text: "Pricing Plan",
        icon: <RxDoubleArrowRight />,
      },
      {
        id: 3,
        href: "/news",
        text: "Instructor Profile",
        icon: <RxDoubleArrowRight />,
      },
      {
        id: 4,
        href: "/",
        text: "Popular Courses",
        icon: <RxDoubleArrowRight />,
      },
      {
        id: 5,
        href: "/",
        text: "Terms & Conditions",
        icon: <RxDoubleArrowRight />,
      },
    ],
  },
];

export const footerLeftItem = [
    {
        id:1,
        title:"Contact Info",
        size:"100%",
        child:[
            {
                id:1,
                icon:<TiLocation/>,
                text:"Quardado ave mountain 28"
            },
            {
                id:2,
                icon:<AiFillPhone/>,
                text:"09380163465"
            },
            {
                id:3,
                icon:<AiFillPhone/>,
                text:"09333242619"
            },
            {
                id:4,
                icon:<MdEmail/>,
                text:"xcode@gmail.com"
            }
        ]
    }
]
