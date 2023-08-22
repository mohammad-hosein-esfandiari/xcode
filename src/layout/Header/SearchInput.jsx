"use client";

import { useEffect, useState } from "react";
import { HiSearch } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { useGetAllData } from "@/core/services/react-query/useSearchFunc";
import { BeatLoader } from "react-spinners";
import Link from "next/link";
import LinkCp from "@/components/common/LinkCp";

const SearchInput = () => {
  const [value, setValue] = useState("");
  const [isShowSearchBox, setIsShowSearchBox] = useState(false);
  const [array, setArray] = useState([]);
  useEffect(() => {
    if (!value) setIsShowSearchBox(false);
    else setIsShowSearchBox(true);
  }, [value]);
  const { mutateAsync, data, isSuccess, isLoading } = useGetAllData();

  const onChangeHandler = async (event) => {
    setValue(event.target.value);
    await mutateAsync();
    if (isSuccess) {
      const allData = data.flatMap((item) => item.data.result);
      const filteredData = allData.filter((item) =>
        item.title
          .split("|")[0]
          .toLowerCase()
          .includes(event.target.value.toLowerCase())
      );
      setArray(filteredData);
    }
  };
  console.log(array);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className=" transition-all duration-300 w-full">
      <div className="flex transition-all duration-300 h-[55px]  items-center shadow-md bg-white rounded-[4px] overflow-hidden">
        <div className="flex-1 h-full">
          <input
            onInput={onChangeHandler}
            value={value}
            type="text"
            placeholder="جستجو ..."
            className="block w-full bg-mode-color text-mode-color rounded-r-[4px] text-sm focus:outline-none focus:border-primary focus:border-[1px] px-6 placeholder:text-sm h-[100%]"
          />
        </div>
        <button className="py-3 px-5 h-full bg-primary">
          <HiSearch className="text-white" />
        </button>
      </div>
      <AnimatePresence>
        {isShowSearchBox && (
          <motion.div
            initial={{ minHeight: 0, opacity: 0 }}
            animate={{ minHeight: "100px", opacity: 1 }}
            exit={{ minHeight: 0, opacity: 0 }}
            className=" max-h-[400px] transition-all duration-300 min-h-[100px] relative overflow-y-auto bg-linear5 mt-3 rounded-[4px] shadow-md">
            {isLoading ? (
              <div className=" absolute  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <BeatLoader size={7} color="var(--primary-color)" />
              </div>
            ) : (
              <>
                {array.length ? (
                  <>
                    {array.map((item) => (
                      <LinkCp
                        key={item._id}
                        href={
                          item.cost
                            ? "/courses/" + item._id
                            : "/blogs/" + item._id
                        }
                        className="p-3 hover:bg-primary transition-all duration-100 hover:text-white border-b-[1px] flex items-center text-mode-color border-[#99999990] ">
                        <div className="pr-2">{item.title.split("|")[0]}</div>
                      </LinkCp>
                    ))}
                  </>
                ) : (
                  <div className=" absolute  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[12px] text-red-400 ">
                    موردی یافت نشد!
                  </div>
                )}
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SearchInput;
