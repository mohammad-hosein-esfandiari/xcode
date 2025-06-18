import { useStepperStore } from "@/context/stepperStore";
import PhonePicker from "../stepBox/PhonePicker";
import InputBoxWrapper from "./InputBoxWrapper";
import * as Yup from "yup";
import { CodePhone } from "../stepBox/CodePhone";
import AuthHolder from "../stepBox/AuthHolder";
import BirthdayHolder from "../stepBox/BirthdayHolder";
import PasswordHolder from "../stepBox/PasswordHolder";
import LastStep from "../stepBox/LastStep";

const RegisterForm = () => {
  const randomCode = useStepperStore((state) => state.randomCode);

  return (
    <InputBoxWrapper>
      <PhonePicker
        validationschema={Yup.object({
          phonenumber: Yup.string()
            .required("Phone number is required")
            .min(10, "Phone number must be at least 10 character"),
        })}
        name="phonenumber"
        type="number"
      />
      <CodePhone
        validationschema={Yup.object({
          codephone: Yup.string()
            .required("Invalid verification code")
            .matches(randomCode, "Verification code is wrong"),
        })}
        name="codephone"
      />
      <AuthHolder
        validationschema={Yup.object({
          name: Yup.string().required("Name is required"),
          lastname: Yup.string().required("Last name is required"),
          date: Yup.string().required("Birthday is required"),
        })}
      />
      <BirthdayHolder
        validationschema={Yup.object({
          nationalcode: Yup.string()
            .required("National code is required")
            .min(10, "National code must be exactly 10 numbers")
            .max(10, "National code must be exactly 10 numbers"),
          email: Yup.string()
            .required("Email is required")
            .email("Wrong email format"),
        })}
      />
      <PasswordHolder
        validationschema={Yup.object({
          password: Yup.string()
            .required("Password is required")
            .min(8, "Password must be at least 8 characters")
            .matches(
              /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
              "The password must be a combination of uppercase and lowercase Latin letters, symbols and numbers"
            ),
          confirmpassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Password doesn't match")
            .required("Password confirmation is required"),
        })}
      />
      <LastStep />
    </InputBoxWrapper>
  );
};

export default RegisterForm;
