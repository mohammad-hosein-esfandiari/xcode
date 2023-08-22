import Link from "next/link";

const InActiveCp = ({text}) => {
    return (
        <ul className=" border-r-[4px] w-full bg-[#dcdcdc55] text-mode-color shadow-md border-red-500  flex flex-col items-center  p-8 my-4  rounded-md ">
        <li>
        <div className="flex ">
                {text}
        </div>
      </li>
        </ul>
    );
}

export default InActiveCp;