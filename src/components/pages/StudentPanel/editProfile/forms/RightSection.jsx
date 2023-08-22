import InputText from "./InputText";
import PhoneNumPicker from "./PhoneNumPicker";

const RightSection = () => {
  return (
    <div>
      <InputText
        name="fullName"
        label="نام و نام خانوادگی"
        type="text"
        placeholder="نام و نام خانوادگی خود را وارد کنید"
      />

      <InputText
        name="email"
        size="mt-2"
        type="email"
        label="پست الکترونیک"
        placeholder="پست الکترونیک خود را وارد کنید"
      />
      <InputText
        name="nationalId"
        size="mt-2"
        label="کدملی"
        type="number"
        placeholder=" کد ملی خود را وارد کنید"
      />
     
    </div>
  );
};

export default RightSection;
