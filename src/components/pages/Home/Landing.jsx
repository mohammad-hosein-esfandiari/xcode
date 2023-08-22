import CourseBoxHolder from "./CourseBoxHolder/CourseBoxHolder";
import SectionTitle from "./SectionTitle";
import Counters from "./counters/Counters";
import HeroSection from "./hero/HeroSection";
import News from "./news/News";
import NewsRegister from "./newsRegister/NewsRegister";
import Services from "./services/Services";
import Teachers from "./teachers/Teachers";

const Landing = ({posts,news,teachers}) => {
    return (
      <>
        <HeroSection/>
        <Counters news={news} posts={posts}/>
        <Services/>
        <CourseBoxHolder posts={posts}/>
        <Teachers teachers={teachers}/>
        <News news={news}/>
        <NewsRegister/>
      </>
    );
}

export default Landing;