import LeftBox from "./LeftBox";
import RightBox from "./RightBox";

const BoxHolder = () => {
  return (
    <div className="lg:w-[60%]  py-8 sm:flex">
      <RightBox />
      <LeftBox />
    </div>
  );
};

export default BoxHolder;
