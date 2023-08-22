import FirstLeftBox from "./FirstLeftBox";
import SecondLeftBox from "./SecondLeftBox";

const LeftBox = () => {
  return (
    <div className=" w-[100%] sm:w-[48%]">
      <FirstLeftBox />
      <SecondLeftBox />
    </div>
  );
};

export default LeftBox;
