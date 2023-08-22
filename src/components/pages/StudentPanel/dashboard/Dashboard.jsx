import PanelHeading from "../PanelHeading";
import ContentHolder from "./content/ContentHolder";
import Slider from "./slider/Slider";

const Dashboard = ({posts}) => {
    return (
        <div className="ss:px-8 px-4 pb-3 w-full h-full overflow-y-scroll scrollbar-hide">
            <PanelHeading title='داشبورد'/>
            <Slider posts={posts.slice(0,8)}/>
            <ContentHolder posts={posts}/>
        </div>
    );
}

export default Dashboard;