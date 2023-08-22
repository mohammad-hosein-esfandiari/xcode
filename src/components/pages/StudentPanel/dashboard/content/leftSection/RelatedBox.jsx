import Image from "next/image";
import Link from "next/link";
import { CiCamera } from "react-icons/ci";
import { HiOutlinePlus } from "react-icons/hi";
const RelatedBox = ({bg,title,lesson,_id}) => {
    return (
        <Link href={`/courses/${_id}`} className={`${bg} cursor-pointer hover:bg-color-green transition-all duration-200  z-2 relative mt-2 rounded-lg hlg:py-4 ss:py-2 py-4 hlg:px-4 px-2 shadow-lg flex items-center`}>
            {/* <div className="bg-white flex items-center justify-center overflow-hidden hlg:w-[60px] w-[40px] h-[40px] hlg:h-[60px] rounded-full"><Image className=" w-full h-full object-cover object-center" src={lesson.image} width={300} height={300}/></div> */}
            <div className="flex-1 text-white pr-3">
                <h3 className=" font-bold text-[15px] hlg:text-[18px]">{lesson.lessonName}</h3>
                <p className="hlg:text-[13px] pl-2 text-[11px] line-clamp-1">{title.split('|')[0]}</p>
            </div>
            {/* <div className=" absolute top-3 left-3 text-white md:text-[20px] text-[16px]"><HiOutlinePlus/></div> */}
        </Link>
    );
}

export default RelatedBox;