'use client'


const SubmitBtn = ({isLoading,step,length}) => {
  return (
        <button
        type="submit"
        disabled={isLoading}
        className=" w-fit px-5 hover:scale-[1.05] disabled:opacity-50 transition duration-500 py-[6px] bg-primary text-white rounded-[4px] text-[10px] mt-4">
        {step === 0
          ? "دریافت کد یک بار مصرف"
          : step < length
          ? "مرحله بعد"
          : "ثبت نام"}
      </button>
    );
}

export default SubmitBtn;