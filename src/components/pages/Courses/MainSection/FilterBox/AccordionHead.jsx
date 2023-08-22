import {  MdKeyboardArrowUp } from "react-icons/md";

const AccordionHead = ({title,children,id,name}) => {
  

  return (
    <div className=" relative">
      <input id={id} name={name} type="radio" className="peer hidden  appearance-none" />
      <label
        htmlFor={id}
        className=" pr-7 cursor-pointer peer-checked:border-b-[1px] border-[#a6a6a642]  pt-3 peer-checked:pb-4 transition-all duration-200 text-mode-color text-[20px] block w-full">
        {title}
      </label>
      <div className=" peer-checked:bg-[#c1c1c12b] peer-checked:h-fit  transition-all duration-300 py-2 pr-10 h-0 overflow-hidden border-b-[1px] border-[#a6a6a642]">
       {children}
      </div>
      <span className=" transition-all duration-400  peer-checked:rotate-[0deg] rotate-[180deg] text-[24px] text-mode-color absolute left-4 top-4 ">
        <MdKeyboardArrowUp />
      </span>
    </div>
  );
};

export default AccordionHead;
