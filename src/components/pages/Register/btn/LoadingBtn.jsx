'use client'
import BeatLoader from "react-spinners/BeatLoader";

const LoadingBtn = () => {
    return (
        <button

        type="button"
        className=" w-fit px-7 hover:scale-[1.05] disabled:opacity-50 transition duration-500 py-[6px] bg-primary text-white rounded-md text-[10px] mt-4">
        <BeatLoader color="white" size={6} margin={0} />
      </button>
    );
}

export default LoadingBtn;