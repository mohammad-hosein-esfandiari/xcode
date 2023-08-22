"use client";

import { BeatLoader } from "react-spinners";

const ModalDetails = ({cancelHandler,submitHandlerModal,text,loading}) => {
  return (
    <div className=" justify-between flex flex-col">
      <h6 className="text-mode-color w-full text-center flex-1 py-6 ">{text}</h6>
      <div className="grid grid-cols-2 text-white gap-4">
        <button
          onClick={cancelHandler}
          className="py-2 hover:scale-[1.03] transition-all duration-300 rounded-[4px] bg-[#969696a2] text-center ">
          لغو
        </button>
        <button
        disabled={loading}
          onClick={submitHandlerModal}
          className="py-2 hover:scale-[1.03] transition-all duration-300 rounded-[4px] bg-primary text-center ">
            {loading ? <BeatLoader color="white" size={6} margin={0} /> : 'تایید'}  
        </button>
      </div>
    </div>
  );
};

export default ModalDetails;
