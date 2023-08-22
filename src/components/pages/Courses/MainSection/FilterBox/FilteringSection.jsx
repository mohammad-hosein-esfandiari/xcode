import FilteringInput from "./FilteringInput";
import { motion } from "framer-motion";
const FilteringSection = ({title,filteringInputArray}) => {
  return (
    <motion.div  className="mb-3">
      <h3 className="text-mode-color w-fit px-4 py-2  border-t-[1px] rounded-t-[4px] relative mb-[-1px] bg-mode-color border-[#83838387] border-l-[1px] border-r-[1px] text-[18px] ">
        {title}
      </h3>

      <ul className="flex border-[1px] border-[#83838387] rounded-[4px] rounded-tr-none px-3 pt-3 flex-wrap">
        {
            filteringInputArray.map((item,index) => (
                <FilteringInput index={index} key={item.id} {...item}/>
            ))
        }
      </ul>
    </motion.div>
  );
};

export default FilteringSection;
