const Price = ({cost}) => {
  const price = cost.toLocaleString('fa-IR')
    return (
        <li className="relative md:col-span-1 col-span-2 transition-all  border-[1px] rounded-[4px] border-primary py-2 sss:py-4  flex justify-center items-center ">
        <div>
          {cost ? (<>    <span className="text-mode-color sss:text-[16px] text-[10px] ">
            قیمت :
          </span>
          <span className=" px-1 sss:text-[17px] text-[10px] text-[#e05858] ">
            {price}
          </span>
          <span className="sss:text-[16px] text-[10px] text-mode-color">
            تومان
          </span></>): (<><span className=" px-1 sss:text-[17px] text-bold text-[10px] text-[#e05858]">رایگان</span></>)}
      
        </div>
      </li>
    );
}

export default Price;