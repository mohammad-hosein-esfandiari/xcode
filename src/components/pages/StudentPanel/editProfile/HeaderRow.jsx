import BreadCrumb from "@/components/common/BreadCrumb/BreadCrumb";
import PanelHeading from "../PanelHeading";

const HeaderRow = () => {
    return (
        
        <div className="bg-linear1 overflow-hidden ss:px-8 pb-[100px] relative px-4">
        <PanelHeading title="ویرایش پروفایل"/>
        <BreadCrumb/>
        <div className=" xs:top-32 top-[146px] left-[50%] translate-x-[-50%] absolute xs:w-[180px] bg-registerbg xs:h-[180px] w-[120px] h-[120px] rounded-full "></div>
    </div>
    );
}

export default HeaderRow;