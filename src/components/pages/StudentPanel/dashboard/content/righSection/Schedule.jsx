import { days } from "@/constant/ScheduleHead";
import Cel from "./Cel";

const Schedule = () => {
    return (
        <>
        <ul className=" grid grid-cols-7">
          {days.map((item,index)=>(
            <li key={index} className="pr-2 text-mode-color">{item}</li>
          ))}
        </ul>
        <div className="border-t-[1px] grid grid-cols-7 grid-rows-3 border-mode-color flex-1 border-r-[1px]">
         {Array(21).fill().map((item,index)=>(

          <Cel key={index} day={index} />
         ))}
        </div>
        </>
    );
}

export default Schedule;