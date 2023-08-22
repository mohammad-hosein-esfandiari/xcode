const CheckedCel = ({num,datBg,celBg,title}) => {
    return (
        <div className={`${celBg} w-full h-full rounded-lg hlg:p-3 sm:p-2 p-6 relative flex justify-between flex-col rotate-[-12deg] mt-[-3px] sm:origin-left `}>
        <span className={` ${datBg} flex items-center justify-center text-[14px] w-[20px] h-[20px] rounded-full absolute left-2 top-[6px]`}>
          {num}
        </span>
        <span className="hlg:text-[14px] sm:block hidden hlg:mt-0 mt-4 sm:text-[13px] text-white">{title} </span>
        <div className="text-[10px] ss:mt-2 md:mt-0 sm:block hidden">
          <span className="hlg:text-[12px]  text-[10px]">۳:۲۵</span>
          <span className="md:mr-1">عصر</span>
        </div>
      </div>
    );
}

export default CheckedCel;