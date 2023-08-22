import { HiOutlineArrowSmLeft } from "react-icons/hi";


const NewsSearchBox = () => {
    return (
        <div className="md:w-1/2 sm:w-[80%] overflow-hidden shadow-boxShadow rounded-[4px] items-center flex h-[55px] mx-auto bg-white">
            <input type="text" placeholder="آدرس ایمیل خود را وارد کنید" className=" flex-1 bg-none h-full focus:outline-none text-black px-4 placeholder:text-[13px]" />
        <div className="w-fit py-1 px-2 flex items-center justify-center">
            <button className="shadow-boxShadow hover:scale-[1.02] transition-all duration-all flex items-center text-white py-2 sm:px-3 px-1 rounded-[4px] text-[14px] bg-primary ">ثبت ایمیل
            <HiOutlineArrowSmLeft className="mr-2 text-[20px]"/>
            </button>
        </div>
        </div>
    );
}

export default NewsSearchBox;