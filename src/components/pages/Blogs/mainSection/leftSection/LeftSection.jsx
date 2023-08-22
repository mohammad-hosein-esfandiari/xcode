"use client";
import Pagination2 from "@/components/common/Pagination/Pagination2";
import PaginationBox from "@/components/common/Pagination/PaginationBox";
import NewsBox from "@/components/common/newsBox/NewsBox";

const LeftSection = ({ news, posts, firstArray }) => {
  return (
    <div className="sm:mb-4 mb-16 md:pr-8 pt-6 col-span-2 ">
      <div className="grid md:grid-cols-2  xs:grid-cols-2 gap-5  md:gap-12">
        {news.map((item) => (
          <NewsBox key={item.id} {...item} />
        ))}
      </div>

      <Pagination2
        href="blogs"
        posts={firstArray}
        bgNone="py-10  sm:hidden block "
      />
    </div>
  );
};

export default LeftSection;
