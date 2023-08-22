import { popularItems } from "@/constant/popularItems";
const PopularSubjects = () => {
    return (
        <div className='flex flex-wrap'>
        {
            popularItems.map((item,index)=>(
                <div key={index+1} className='px-8 py-[6px] bg-[#94949467] hover:bg-primary hover:text-white cursor-pointer w-fit rounded-[4px] text-mode-color opacity-80 ml-3 mb-3 text-[12px]'>
                {item}
            </div>
            ))
        }
    
    </div>
    );
}

export default PopularSubjects;