
import dynamic from "next/dynamic";
const BasketBtn = dynamic(() => import("@/layout/Header/BasketBtn"), {
    ssr: false,
  });
import Notification from "./Notification";
const PanelHeading = ({title}) => {
    return (
        <div className="flex  items-center justify-between py-6">
            <h2 className="text-[25px] font-bold text-mode-color" >{title}</h2>
            <div className="flex items-center">
                {/* <BasketBtn icon='text-mode-color text-[25px]' type='cursor-pointer relative hover:scale-[1.1]'/>
                <Notification/> */}
            </div>
        </div>
    );
}

export default PanelHeading;