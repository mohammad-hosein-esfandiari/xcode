import { useSearchParams } from "next/navigation";

export const useSearchParamsInUrl = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("filter");
  const category = searchParams.get("category");
  const limit = searchParams.get("limit");
  const page = searchParams.get("page");
  const pagsize = searchParams.get("pagesize");
  const pagnumber = searchParams.get("pagenumber");
  const queryArray = query?.split("_");
  return { queryArray,limit,page,pagsize ,pagnumber,category};
};
