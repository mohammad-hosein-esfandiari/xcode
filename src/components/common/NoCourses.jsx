import { BsCreditCard2Front } from "react-icons/bs";

const NoCourses = () => {
  return (
    <div className="w-full h-full flex-col flex items-center justify-center">
      <BsCreditCard2Front className="text-[80px] mt-4 text-primary" />
      <span className="text-[#e05858] font-bold ss:text-[20px] text-[16px] mt-8">
        دوره ای برای نمایش وجود ندارد
      </span>
    </div>
  );
};

export default NoCourses;
