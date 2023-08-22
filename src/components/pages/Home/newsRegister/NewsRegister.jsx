import SectionTitle from "../SectionTitle";
import NewsRegisterSmallerIcon from "./NewsRegisterSmallerIcon";
import NewsSearchBox from "./NewsSearchBox";

const NewsRegister = () => {
    return (
        <>
      <SectionTitle title=" دریافت آخرین اخبار" />

        <section className=" bg-linear1">
        <div className="xl:container relative md:px-[100px] text-textColor px-6 py-[8rem]">
            <NewsRegisterSmallerIcon/>
            <NewsSearchBox/>
        </div>
      </section>
        </>
    );
}

export default NewsRegister;