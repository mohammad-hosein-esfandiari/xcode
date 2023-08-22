import AccordionHead from "./AccordionHead";
import FilterInput from "./FilterInput";
import { filterAccordion } from "@/constant/coursesFilter";
const InputHolder = ({href}) => {
  return (
    <div className="  flex-1 mt-2 ">
      {filterAccordion.map((item) => (
        <AccordionHead
          key={item.id}
          id={item.name}
          name="filterAccordion"
          title={item.label}>
          {item.radioGroup.map((el) => (
            <FilterInput
            href={href}
              name={item.name}
              id={el.id}
              key={el.id}
              type={item?.radio === true ? "radio" : "checkbox"}
              label={el.radioLabel}
            />
          ))}
        </AccordionHead>
      ))}
    </div>
  );
};

export default InputHolder;
