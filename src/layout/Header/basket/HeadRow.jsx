import { IoMdClose } from "react-icons/io";

const HeadRow = ({setToggle,title}) => {
    return (
        <div className="bg-mode-color border-[#91919167] border-b-[1px] text-mode-color flex pl-16 pr-6 justify-between py-3">

            <h3 className="  text-[25px] text-primary text-center font-bold ">{title}</h3>
            <button className="hover:rotate-90 text-[20px] transition-all text-mode-color duration-300 absolute left-2 top-2" onClick={()=> setToggle(false)}><IoMdClose/></button>
        </div>
    );
}

export default HeadRow;