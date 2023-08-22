import SectionTitle from "../SectionTitle";
import NewsBox from "@/components/common/newsBox/NewsBox";
import NewsSmallerIcon from "./NewsSmallerIcon";

const News = ({ news }) => {
  return (
    <div className="bg-linear2 pb-16 ">
      <SectionTitle title="اخبار و مقالات" link="blogs" />
      <div className=" xl:container relative lg:px-[100px] ss:px-8 sss:px-6 px-4">
        <NewsSmallerIcon />
        <div className="w-[100%] grid hlg:grid-cols-4 md:grid-cols-3 ss:grid-cols-2  sm:gap-8 gap-4">
          {news.map((item) => (
            <NewsBox key={item._id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
