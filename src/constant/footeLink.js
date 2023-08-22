import { ImLinkedin2 } from "react-icons/im";
import { TbBrandTelegram } from "react-icons/tb";
import { FaPinterestP } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { RxDoubleArrowLeft } from "react-icons/rx";
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
    title: "اکسپلور",
    size:"50%",
    child: [
      {
        id: 1,
        href: "/",
        text: "درباره ما",
        icon: <RxDoubleArrowLeft />,
      },
      {
        id: 2,
        href: "/",
        text: "رویداد های آینده",
        icon: <RxDoubleArrowLeft />,
      },
      {
        id: 3,
        href: "/news",
        text: "اخبار و مقالات",
        icon: <RxDoubleArrowLeft />,
      },
      {
        id: 4,
        href: "/",
        text: "سوالات متداول",
        icon: <RxDoubleArrowLeft />,
      },
      {
        id: 5,
        href: "/",
        text: "گواهینامه",
        icon: <RxDoubleArrowLeft />,
      },
    ],
  },
  {
    id:2,
    title: "لینک های مفید",
    size:"50%",
    child: [
      {
        id: 1,
        href: "/",
        text: "با ما تماس بگیرید",
        icon: <RxDoubleArrowLeft />,
      },
      {
        id: 2,
        href: "/",
        text: "طرح قیمت گذاری",
        icon: <RxDoubleArrowLeft />,
      },
      {
        id: 3,
        href: "/news",
        text: "مشخصات مربی",
        icon: <RxDoubleArrowLeft />,
      },
      {
        id: 4,
        href: "/",
        text: "دوره های محبوب",
        icon: <RxDoubleArrowLeft />,
      },
      {
        id: 5,
        href: "/",
        text: "شرایط و ضوابط",
        icon: <RxDoubleArrowLeft />,
      },
    ],
  },
];

export const footerLeftItem = [
    {
        id:1,
        title:"اطلاعات تماس",
        size:"100%",
        child:[
            {
                id:1,
                icon:<TiLocation/>,
                text:"خیابان کوادرادا کوه 28"
            },
            {
                id:2,
                icon:<AiFillPhone/>,
                text:"۰۹۳۸۰۱۶۳۴۶۵"
            },
            {
                id:3,
                icon:<AiFillPhone/>,
                text:"۰۹۳۳۳۲۴۲۶۱۹"
            },
            {
                id:4,
                icon:<MdEmail/>,
                text:"xcode@gmail.com"
            }
        ]
    }
]
