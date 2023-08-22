const BasketCount = ({count}) => {
    return (
        <span className=" absolute  flex items-center justify-center sm:top-[-7px] top-[-2px] sm:right-[-1px] right-[1px] w-[15px] text-center px-[2px] h-[15px] rounded-full shadow-modeShadow bg-[#e05858]  text-white text-[10px]">
        {count.toLocaleString("fa-IR")}
      </span>
    );
}

export default BasketCount;