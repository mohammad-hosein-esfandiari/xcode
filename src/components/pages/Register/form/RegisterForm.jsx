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
    const error = useStepperStore((state) => state.error);



    return (
        <InputBoxWrapper>
             <PhonePicker
        validationschema={Yup.object({
          phonenumber: Yup.string()
            .required("وارد کردن شماره تماس الزامی است")
            .min(14, "شماره تماس باید حداقل ۱۰ کاراکتر باشد"),
        })}
        name="phonenumber"
        type="number"
      />
            <CodePhone
        validationschema={Yup.object({
          codephone: Yup.string()
            .required("کد وارد شده اشتباه است")
            .matches(randomCode, "کد وارد شده اشتباه است"),
        })}
        name="codephone"
      />
      <AuthHolder validationschema={Yup.object({
          name: Yup.string().required("وارد کردن نام الزامی می باشد"),
          lastname: Yup.string().required(
            "وارد کردن نام خانوادگی الزامی می باشد"
          ),
          date:Yup.string().required("وارد کردن تاریخ تولد الزامی می باشد"),
        
        })} />
        <BirthdayHolder  validationschema={Yup.object({
          nationalcode: Yup.string()
            .required("وارد کردن کد ملی الزامی است")
            .min(10, "کد ملی باید حداقل 10 رقم داشته باشد")
            .max(10,'کد ملی نباید بیشتر از ۱۰ رقم باشد'),
            email: Yup.string()
            .required("وارد کردن ایمیل الزامی می باشد")
            .email("ایمیل را به درستی وارد کنید")
            ,

        })}/>
        <PasswordHolder   validationschema={Yup.object({
          password: Yup.string()
            .required("!وارد کردن رمز عبور الزامی است")
            .min(8, "رمز عبور باید حداقل ۸ کاراکتر داشته باشد")
            .matches(
              /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
              "رمز عبور باید ترکیبی از حروف لاتین بزرگ و کوچک و سمبل و اعداد باشد"
              ),
          confirmpassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "رمز عبور مطابقت ندارد")
            .required("وارد کردن تایید رمز الزامی است"),
        })}/>
        <LastStep/>
     </InputBoxWrapper>
    );
}

export default RegisterForm;