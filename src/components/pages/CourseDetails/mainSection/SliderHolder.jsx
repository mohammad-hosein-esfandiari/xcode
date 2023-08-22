
import SliderItems from "./SliderItems";

const SliderHolder =  ({courseDetail,posts}) => {
  
  return (
    <div className="py-[60px] bg-linear2">
      <div className="xl:container lg:px-[100px] px-6">
        <h2 className="md:text-[35px] md:text-right text-center font-bold pb-5 text-mode-color text-[25px]">
          دوره های مرتبط
        </h2>
        <SliderItems courses={posts} courseDetail={courseDetail} />
      </div>
    </div>
  );
};

export default SliderHolder;
