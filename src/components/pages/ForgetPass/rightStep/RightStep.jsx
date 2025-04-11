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
        .required("Email is required")
        .email("Invalid email address")
        ,
      })}
     >
     <TextInput
          name="email"
          label="Email"
          color="white"
          type="email"
        />
     </motion.div>
      <CodePhone
        validationschema={Yup.object({
          codephone: Yup.string()
            .required("Invalid code")
            .matches(randomCode, "Code is incorrect"),
        })}
        name="codephone"
        color="white"
      />
      <motion.div
        {...stepAnimate}
        className="mt-[-10px]"
        validationschema={Yup.object({
          password: Yup.string()
          .required("Password is required")
          .min(8, "Password must contain at least 8 characters")
          .matches(
            /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
            "The password must be a combination of uppercase and lowercase\nLatin letters, symbols, and numbers."
            ),
          confirmpassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Password does not match")
            .required("confirm pass is required"),
        })}>
        <TextInput
          name="password"
          label="Password"
          color="white"
          type="password"
        />
        <TextInput
          name="confirmpassword"
          label="Confirm Password"
          type="password"
          color="white"
        />
      </motion.div>
    
    </ForgetPassForm>
  );
};

export default RightStep;
