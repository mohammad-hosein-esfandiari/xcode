
import BackBtn from "@/components/pages/Pricing/BackBtn";
import ItemHolder from "@/components/pages/Pricing/ItemHolder";
import SubmitPricing from "@/components/pages/Pricing/SubmitPricing";


const Pricing = () => {



  return (
    <div className="bg-linear1">

    <ul className=" xl:container mb-4 lg:px-[100px] h-screen ss:px-8 px-2 bg-linear1 flex flex-col items-center justify-between py-16  ">
      <li className=" ss:px-20  md:px-44 xs:px-4 px-2 w-full flex-1">
        <ItemHolder />
      </li>
      <li className="grid grid-cols-2 ss:text-[16px] mt-4 xs:text-[14px] text-[12px] gap-4 w-fit">
        <BackBtn/>
        <SubmitPricing />
      </li>
    </ul>
    </div>
  );
};

export default Pricing;
