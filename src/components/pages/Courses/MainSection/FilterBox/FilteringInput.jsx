import { motion } from "framer-motion";

const FilteringInput = ({title,name,id,type,index}) => {
  return (
    <motion.div initial={{opacity:0}} transition={{delay:(index+1)*0.2}} animate={{opacity:1}} className="w-fit hover:scale-[1.04] transition-all duration-300 overflow-hidden  ml-2 mb-3 rounded-[4px]  h-fit">
      <input
        id={id}
        name={name}
        type={type}
        className=" appearance-none peer"
      />
      <label
        htmlFor={id}
        className="w-full h-full inline-block text-[14px] text-mode-color  px-4 cursor-pointer peer-checked:text-white  peer-checked:bg-primary   bg-[#9d9d9d61] py-1 ">
        {title}
      </label>
    </motion.div>
  );
};

export default FilteringInput;
