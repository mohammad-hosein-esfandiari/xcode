import {
  filterNameArrange,
  filterNamePrice,
} from "@/constant/filteringCourses/arrangeAndPrice";
import {
  allCheckboxItem,
  bugFilter,
  filterItemObj,
  levelItem,
} from "@/constant/filteringCourses/filterItemObj";
import { useSearchParamsStore } from "@/context/courseFilter";
import { useFilteredArrayCourses } from "@/context/filterdArrayCourses";
import { notFound } from "next/navigation";

export const filteringTheCourses = (posts, queryArray, limit, page) => {
  const filteredData = useFilteredArrayCourses.getState().filteredData;
  const filter = useSearchParamsStore.getState().filter;

  let filteredArray = [...posts];
  
  if (
    queryArray &&
    !queryArray.every((item) => bugFilter.find((el) => item === el))
  ) {
    notFound();
  }

  let lastIndex = limit * page;
  let startIndex = lastIndex - limit;

  if (!filteredData) {
    useFilteredArrayCourses.getState().setFilteredData(posts);
  }

  if (filter.arrange === "newest") {
    filteredArray = filteredArray.reverse();
  }
  if (filter.arrange === "oldest") {
    filteredArray = filteredArray;
  }
  if (filter.arrange === "popular") {
    filteredArray = filteredArray.sort((a, b) => b.likedCount - a.likedCount);
    
  }
  if (filter.price === "cheapest") {
    filteredArray = filteredArray.sort((a, b) => a.cost- b.cost);
  }
  if (filter.price === "expensive") {
    filteredArray = filteredArray.sort((a, b) => b.cost - a.cost);
  }

  if (filter.other.some((item) => filterItemObj.find((el) => el === item))) {
    const arr = filteredArray.filter((item) =>
      filter.other.some((el) => item.title.split('|')[1] === el)
    );
    filteredArray = arr;
  }
  if (filter.other.some((item) => levelItem.find((el) => el === item))) {
    const arr = filteredArray.filter((item) =>
      filter.other.some((el) => item.level === el)
    );
    filteredArray = arr;
  }

  useFilteredArrayCourses.getState().setFirstArray(filteredArray);

  let completedArray = filteredArray.slice(startIndex, lastIndex);
console.log(completedArray)
  useFilteredArrayCourses.getState().setFilteredData(completedArray);
};

const filterStoreItem = (arry, queryArray) => {
  let isInArray = queryArray?.find((item) => {
    return arry.some((key) => key === item);
  });
  return isInArray;
};

export const changeUrlFilter = (posts, numbers, queryArray, limit,page) => {
  const filteredData = useFilteredArrayCourses.getState().filteredData;
  if (!numbers.includes(Number(limit))) {
    notFound();
  }
  if (filteredData === undefined || []) {
    let lastIndex = limit * page;
    let startIndex = lastIndex - limit;
  let completedArray = posts.slice(startIndex, lastIndex);

    useFilteredArrayCourses.getState().setFilteredData(completedArray);
  }
  const text = filterStoreItem(filterNameArrange, queryArray);
  const text2 = filterStoreItem(filterNamePrice, queryArray);
  if (text) {
    useSearchParamsStore.getState().setRadio("arrange", text);
  }
  if (text2) {
    useSearchParamsStore.getState().setRadio("price", text2);
  }
  if (queryArray?.some((item) => allCheckboxItem.find((el) => el === item))) {
    useSearchParamsStore
      .getState()
      .setOther(
        queryArray.filter((item) => allCheckboxItem.some((el) => el === item))
      );
  }
};
