import Image from "next/image";
import bannercourse from "@/assets/images/bannercourse.png";
import { RiDeleteBinLine } from "react-icons/ri";
import { useBasket } from "@/context/basket";
const BasketItem = ({image,title,price,id}) => {
  const removeHandler = ()=>{
    useBasket.getState().setRemoveFromBasket(id)
  }
  return (
    <ul className=" bg-mode-color   border-t-[0.5px] hover:my-2 cursor-pointer transition-all hover:border-primary duration-300 border-b-[0.5px] h-fit border-[#91919167] flex p-1">
      <li className="  w-[18%] p-1 overflow-hidden">
        <Image
          src={image}
          alt="course"
          width={100}
          height={100}
          priority={true}
          className="h-full border-[0.5px] border-[#91919167] rounded-[2px] w-full object-cover object-center group-hover:scale-[1.05] transition-all duration-500"
        />
      </li>
      <li className="flex-1 flex flex-col justify-between px-3 text-[18px] text-mode-color">
        <div>
        <h2 className="pl-2 py-1 text-[14px]  ">{title.split('|')[0]}</h2>
        </div>
        <div className="mt-2 flex justify-between">
           {
            price ? (  <div>
              <span className="text-[16px] ml-2 font-bold text-[#e05858]">
                {price.toLocaleString('fa-IR')}
              </span>
              <span className="text-[8px] relative text-gray-400">
                توما
                <span className="absolute left-0 top-[-8px]">ن</span>
              </span>
            </div>) : (<span className="py-1 text-[#e05858] font-bold text-[12px]">رایگان</span>)
           }
          
          <button onClick={removeHandler} className="text-[20px] hover:scale-[1.2] transition-all duration-300 py-1 rounded-lg text-[#e05858b5] "><RiDeleteBinLine/></button>
        </div>
      </li>
    </ul>
  );
};

export default BasketItem;
