"use client";
import Hero from "@/components/common/hero/Hero";
import Image from "next/image";
import TitleRow from "./TitleRow";
import HeadLines from "./HeadLines";
import BlogsText from "./BlogsText";
import RelatedHolder from "./RelatedHolder";
import { textToObjectBlogs } from "@/core/utils/blogsAoiConvertor";
const BlogsDetail = ({ post, news }) => {

  const detailsId = post.paragraph.map((item) => {
    return {
      id: item.id,
      title: item.title,
    };
  });
  return (
    <>
      <Hero title="News & Articles Details" />
      <section className=" xl:container w-full  mt-4 lg:px-[100px] sm:px-6 px-4">
        <TitleRow title={post.title} />
        <div className="w-full md:px-40  overflow-hidden">
          <Image
            alt="news"
            priority={true}
            className="w-full rounded-[4px] h-full "
            width={500}
            height={500}
            src={post.image}
          />
        </div>
        <div className="md:px-24 ">
          <div className="pb-24 ">
            <HeadLines detailsId={detailsId} />
            {post.paragraph.map((item, index) => (
              <BlogsText key={index} {...item} />
            ))}
            <RelatedHolder news={news} newsId={post._id} />
          </div>
        </div>
      </section>
      <div className="bg-linear5">
        <div className=" xl:container w-full  lg:px-[100px] py-16 sm:px-6 px-4">
          {/* <Comments /> */}
        </div>
      </div>
    </>
  );
};

export default BlogsDetail;
