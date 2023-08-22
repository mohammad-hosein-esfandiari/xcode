"use client";
import { CodePhone } from "../../Register/stepBox/CodePhone";
import * as Yup from "yup";
import { motion } from "framer-motion";

import { stepAnimate } from "@/constant/stepperInputAnimation";
import { useStepperStore } from "@/context/stepperStore";
import PhonePicker from "../../Register/stepBox/PhonePicker";
import TextInput from "../../Register/stepBox/TextInput";
import ForgetPassForm from "./ForgetPassForm";

const RightStep = () => {
  const randomCode = useStepperStore((state) => state.randomCode);

  return (
    <ForgetPassForm>
     <motion.div
     {...stepAnimate}
      validationschema={Yup.object({
        email: Yup.string()
        .required("وارد کردن ایمیل الزامی می باشد")
        .email("ایمیل را به درستی وارد کنید")
        ,
      })}
     >
     <TextInput
          name="email"
          label="پست الکترونیک"
          color="white"
          type="email"
        />
     </motion.div>
      <CodePhone
        validationschema={Yup.object({
          codephone: Yup.string()
            .required("کد وارد شده اشتباه است")
            .matches(randomCode, "کد وارد شده اشتباه است"),
        })}
        name="codephone"
        color="white"
      />
      <motion.div
        {...stepAnimate}
        className="mt-[-10px]"
        validationschema={Yup.object({
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
        })}>
        <TextInput
          name="password"
          label="رمز عبور"
          color="white"
          type="password"
        />
        <TextInput
          name="confirmpassword"
          label="تکرار رمز عبور"
          type="password"
          color="white"
        />
      </motion.div>
    
    </ForgetPassForm>
  );
};

export default RightStep;
