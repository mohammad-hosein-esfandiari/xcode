
import { TfiCup } from 'react-icons/tfi';
import { GoBook } from 'react-icons/go';
import { TfiBlackboard } from 'react-icons/tfi';
import { IoSchoolOutline } from 'react-icons/io5';

export const counterBoxInfo = [
    {
        id:1,
        desc:"دانش آموزانی که ثبت نام گرده اند",
        count:449,
        icon:<IoSchoolOutline className="text-white text-[70px] mb-4"/>
    },
    {
        id:2,
        desc:"برندگان قرعه کشی",
        count:254,
        icon:<TfiCup className="text-white text-[65px] mb-4"/>

    },
    {
        id:3,
        desc:"مقاله آموزشی",
        count:459,
        icon:<GoBook className="text-white text-[70px] mb-4"/>

    },
    {
        id:4,
        desc:"ویدیو آموزشی",
        count:784,
        icon:<TfiBlackboard className="text-white text-[70px] mb-4"/>

    },
]
