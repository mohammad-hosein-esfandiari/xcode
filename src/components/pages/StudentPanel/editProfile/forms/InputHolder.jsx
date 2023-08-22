
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

const InputHolder = ({loading,setLoading}) => {
    return (
        <div className=" grid md:grid-cols-2 hlg:px-[40px]  md:px-[35px] md:gap-x-[110px] lg:gap-x-[150px] gap-x-[50px]">
            <RightSection/>
            <LeftSection setLoading={setLoading} loading={loading}/>
            
        </div>
    );
}

export default InputHolder;