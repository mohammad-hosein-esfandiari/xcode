"use client";
import ReactPaginate from "react-paginate";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useRouter } from "next/navigation";
import { useSearchParamsInUrl } from "@/hooks/useSearchParamsInUrl";

const Pagination = ({ bgNone, posts, setArray, href }) => {
  const { queryArray, limit, page } = useSearchParamsInUrl();
  const router = useRouter();

  const handlePageClick = (event) => {
    if (queryArray) {
      router.push(
        `/${href}?limit=${limit}&page=${
          event.selected + 1
        }&filter=${queryArray.join("_")}`
      );
    } else {
      router.push(`/${href}?limit=${limit}&page=${event.selected + 1}`);
    }
    window.scrollTo(0, 0);
  };

  return (
    <div
      dir="ltr"
      className={` select-none ${bgNone ? bgNone : "bg-linear2 py-10"} `}>
      {posts?.length > limit ? (
        <>
          <ReactPaginate
            previousLabel={<IoIosArrowBack />}
            nextLabel={<IoIosArrowForward />}
            pageCount={posts ? Math.ceil(posts.length / limit) : 1}
            activeClassName="text-white"
            pageClassName="ss:h-[50px] ss:w-[50px] xs:h-[40px] mb-1 border-[1px] h-[30px] xs:w-[40px] w-[30px] rounded-full overflow-hidden bg-[#aaaaaa50] text-mode-color mr-1"
            activeLinkClassName="flex items-center justify-center    text-white xs:text-[16px] text-[11px] bg-primary w-full h-full"
            pageLinkClassName="w-full h-full flex items-center justify-center "
            className="transition-all xs:text-[14px] text-[11px] duration-500 w-fit    mx-auto flex flex-wrap "
            previousLinkClassName="flex border-[1px] mr-1 items-center justify-center text-mode-color bg-[#aaaaaa50] rounded-full ss:h-[50px] ss:w-[50px] xs:h-[40px] mb-1 border-[1px] h-[30px] xs:w-[40px] w-[30px]"
            nextLinkClassName="flex border-[1px] items-center text-mode-color justify-center bg-[#aaaaaa50] rounded-full ss:h-[50px] ss:w-[50px] xs:h-[40px] mb-1 border-[1px] h-[30px] xs:w-[40px] w-[30px]"
            breakLinkClassName="flex border-[1px] text-mode-color items-center justify-center bg-[#aaaaaa50] rounded-full ss:h-[50px] ss:w-[50px] xs:h-[40px] mb-1 border-[1px] h-[30px] xs:w-[40px] w-[30px] mr-1"
            disabledClassName=" hidden"
            marginPagesDisplayed={1}
            pageRangeDisplayed={2}
            onPageChange={handlePageClick}
            forcePage={page ? page - 1 : 1}
          />
        </>
      ) : (
        <div className="w-full h-[50px]"></div>
      )}
    </div>
  );
};

export default Pagination;
