import LeftSection from "./leftSection/LeftSection";
import RightSection from "./righSection/RightSection";

const ContentHolder = ({posts}) => {
    return (
        <section className="grid  md:grid-cols-3 grid-cols-1 pt-6 ">
            <RightSection/>
            <LeftSection posts={posts}/>
         
        </section>
    );
}

export default ContentHolder;