import InputText from "./InputText";
import PhoneNumPicker from "./PhoneNumPicker";

const RightSection = () => {
  return (
    <div>
      <InputText
        name="fullName"
        label="FullName"
        type="text"
        placeholder="Enter your fullName"
      />

      <InputText
        name="email"
        size="mt-2"
        type="email"
        label="Email"
        placeholder="Enter your email"
      />
      <InputText
        name="nationalId"
        size="mt-2"
        label="National Code"
        type="number"
        placeholder="Enter your national ID"
      />
     
    </div>
  );
};

export default RightSection;
