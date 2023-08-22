import Schedule from "./Schedule";

const RightSection = () => {
  return (
    <div className="flex flex-col md:pl-6 col-span-2">
      <h2 className="text-[20px] mb-[22px] text-mode-color">برنامه هفتگی</h2>
        <Schedule/>
    </div>
  );
};

export default RightSection;
