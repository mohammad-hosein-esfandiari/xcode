"use client";
import { useRouter } from "next/navigation";
import { useSearchParamsInUrl } from "@/hooks/useSearchParamsInUrl";
import { useSearchParamsStore } from "@/context/courseFilter";
import { filterNameArrange, filterNamePrice } from "@/constant/filteringCourses/arrangeAndPrice";

const FilterInput = ({ type, label, name, id ,href}) => {
  const router = useRouter();
  const setRadio = useSearchParamsStore(state => state.setRadio)
  const setCheckbox = useSearchParamsStore(state => state.setCheckbox)
  const { queryArray ,limit,page} = useSearchParamsInUrl();

  const pushFuncRadio = (targetId, objectArray) => {
    const isInArray = queryArray?.find((item) => {
      return objectArray.some((key) => key === item);
    });
    if (isInArray) {
      const filteredArray = queryArray.filter((item) => item !== isInArray);
      const newArray = [targetId, ...filteredArray];

      router.push(`${href}?limit=${limit}&page=1&filter=${newArray.join('_')}`);
    } else {
      const newArray2 = [targetId, ...queryArray];

      router.push(`${href}?limit=${limit}&page=1&filter=${newArray2.join('_')}`);
    }
  };


  const onChangeHandler = (event) => {
    const id = event.target.id
    const name = event.target.name
    if (!queryArray) {
      router.push(`${href}?limit=${limit}&page=${page}&filter=${id}`);
    } else {
      if (event.target.name === "inputarrange") {
        pushFuncRadio(id, filterNameArrange);
      } else if (event.target.name === "inputprice") {
        pushFuncRadio(id, filterNamePrice);
      } else {
        const include = queryArray.some(item => item === id)
        if(include){
          const filteredArr = queryArray.filter(el => el !== id)
          if(queryArray.length-1 < 1){
            router.push(`${href}?limit=${limit}&page=1`)
          }else{
            router.push(`${href}?limit=${limit}&page=1&filter=${filteredArr.join('_')}`)
          }
        }else{
            const newArr = [id,...queryArray]
            router.push(`${href}?limit=${limit}&page=1&filter=${newArr.join('_')}`)
        }
      }
    }



    
    if(event.target.name === "inputarrange"){
      setRadio('arrange',id)
    }
     else if(event.target.name === "inputprice"){
      setRadio('price',id)
    }
    else{
      setCheckbox(id)
    }


  };

  return (
    <div className="flex items-center hover:pr-3 transition-all duration-300 py-3 px-2">
      <input
        checked={queryArray?.includes(id) ? true : false}
        onChange={onChangeHandler}
        name={`input${name}`}
        id={`${id}`}
        type={type}
        className={` transition-all duration-300 appearance-none outline-[2px] peer outline-offset-[2px] ${
          type === "radio" ? "rounded-full" : "rounded-[1px]"
        } cursor-pointer checked:bg-primary outline-mode-color checked:outline-primary outline w-[8px] h-[8px] `}
      />
      <label
        htmlFor={`${id}`}
        className="block w-full cursor-pointer  pr-4 peer-checked:text-primary text-mode-color">
        {label}
      </label>
    </div>
  );
};

export default FilterInput;
