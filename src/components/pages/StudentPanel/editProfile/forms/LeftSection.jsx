import DatePicker from "@/components/pages/Register/stepBox/DatePicker";
import InputText from "./InputText";
import BirthDatePicker from "./BirthDatePicker";
import PhoneNumPicker from "./PhoneNumPicker";
import { BeatLoader } from "react-spinners";

const LeftSection = ({ loading, setloading }) => {
  return (
    <div className=" flex-col flex justify-between">
      <div className="">
        <PhoneNumPicker
          name="phoneNumber"
          label="شماره تماس خود را وارد کنید"
          type="number"
        />
        <BirthDatePicker
          name="birthDate"
          size="mt-2"
          label="تاریخ تولد"
          type="text"
        />
      </div>

      <div className="flex md:mt-0 mt-8 md:justify-start justify-center flex-row-reverse">
        <button
          type="submit"
          className="bg-primary hover:scale-[1.02] transition-all duration-300 hover:shadow-boxShadow text-white rounded-lg w-fit py-2 px-24 md:px-8">
          {loading ? (
            <>
              <BeatLoader color="white" size={6} />
            </>
          ) : (
            "ذخیره"
          )}
        </button>
      </div>
    </div>
  );
};

export default LeftSection;
