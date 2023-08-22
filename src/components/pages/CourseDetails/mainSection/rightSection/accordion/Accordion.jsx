import { BiPlus } from "react-icons/bi";
import { BiMinus } from "react-icons/bi";
import AccordionItem from "./AccordionItem";

const Accordion = ({ id, name, type, title, details, isInStudents ,index,lessonId}) => {
  return (
    <div>
      <div className=" relative items-center justify-end py-[12px] ">
        <input
        defaultChecked={index === 0 && true}
          id={id}
          name={name}
          type={type}
          className=" appearance-none bg-transparent peer/input"
        />
        <label
          htmlFor={id}
          className="pr-4 w-full border-[1px] top-0 right-0 absolute bg-[#ebebeb7c]  rounded-[4px]  border-[#d4d4d482] py-2 text-mode-color cursor-pointer peer-checked/input:border-b-0 peer-checked/input:rounded-b-none transition-all duration-300  peer-checked/input:bg-[#ebebeb7c] ">
          {title}
        </label>

        <div className="border-[1px] rounded-b-[4px] border-[#d4d4d482] mt-[5px] transition-all duration-500 peer-checked/input:visible invisible peer-checked/input:opacity-100 opacity-0 delay-75 ease-out  h-0 peer-checked/input:h-fit  w-full  overflow-hidden bg-[#f3f3f341]">
          {details.map((item, num) => (
            <AccordionItem
            lessonId={lessonId}
              isInStudents={isInStudents}
              length={details.length - 1}
              headlineIndex={index}
              index={num}
              {...item}
              key={num}/>
   
          ))}
        </div>
        <span className="peer-checked/input:block hidden text-mode-color absolute left-4 top-3 ">
          <BiMinus />
        </span>
        <span className="peer-checked/input:hidden text-mode-color block absolute left-4 top-3">
          <BiPlus />
        </span>
      </div>
    </div>
  );
};

export default Accordion;
