
import Hero from "@/components/common/hero/Hero";
import CourseDetailsMainSection from "./mainSection/CourseDetailsMainSection";
import SliderHolder from "./mainSection/SliderHolder";

const CourseDetails = ({courseDetail,allComments,posts}) => {
    return (
        <>
            <Hero title="جزئیات دوره"/>
            <section className=" xl:container w-full mt-4 lg:px-[100px] pb-8 sm:px-6 px-4">
                <CourseDetailsMainSection allComments={allComments} courseDetail={courseDetail}/>
            </section>
            <SliderHolder posts={posts} courseDetail={courseDetail}/>
        </>
    );
}

export default CourseDetails;