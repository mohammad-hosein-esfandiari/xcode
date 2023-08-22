"use client";
import { Formik, Form, Field } from "formik";
import { motion } from "framer-motion";
import { stepAnimate } from "@/constant/stepperInputAnimation";
import * as Yup from "yup";
import TextInput from "../Register/stepBox/TextInput";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { BeatLoader } from "react-spinners";
import { loginFunc } from "@/core/services/login";
import { toast } from "react-toastify";
import { useUserInfo } from "@/context/userInfoStore";
import LinkCp from "@/components/common/LinkCp";
const LoginForm = () => {
  const input = useRef();
  const navigate = useRouter();
  const setUserLogin = useUserInfo((state) => state.setUserLogin);
  const [loading, setLoading] = useState(false);

  const initialValues = {
    email: "",
    password: "",
    remember:false
  };
  const onSubmit = async (value, actions) => {

  console.log(value)
    setLoading(true);
     
    const {  isSuccess } = await loginFunc(value);
    if (isSuccess) {
      setLoading(false);
      toast.success("ورود با موفقیت انجام شد");
      setTimeout(()=>{

        toast.info("در حال انتقال به صفحه اصلی");
      },500)
      actions.resetForm();
     
      setTimeout(() => {
        navigate.push("/");
      }, 3000);
      // examppple@dffvdf.com
    } else {
      setLoading(false);
      actions.setFieldValue("password", "");
      actions.setFieldValue("email", "");
      actions.submitForm();
    }
  };
  const validationSchema = {
    email: Yup.string()
      .email(" ایمیل را اشتباه وارد کرده اید")
      .required("وارد کردن ایمیل الزامی است"),
    password: Yup.string()
      .required("وارد کردن رمز عبور الزامی است")
      .min(8, "رمز عبور باید حداقل ۸ کاراکتر داشته باشد"),
      remember:Yup.boolean()
  };
  return (
    <div className="scale-[1.4] mt-5">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={Yup.object(validationSchema)}>
        {() => (
          <Form  className=" pt-8 text-white">
            <TextInput
              color="white"
              name="email"
              label="پست الکترونیک"
              type="email"
            />
            <TextInput
              color="white"
              name="password"
              label="رمز عبور"
              type="password"
            />

            <motion.div
              {...stepAnimate}
              className="flex mt-2 mr-2 w-full items-center justify-between">
              <div className="flex items-center">
              <Field
                          name='remember'
                          render={({ field, form: { touched, errors } }) => (

                            <input
                            {...field}
                              ref={input}
                              id="checked_checkbox"
                              type="checkbox"
                              value=""
                              className="w-3 h-3 text-blue-600 bg-gray-100 focus:outline-none rounded outline-none border-none dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />

                          )}/>
                <label
                  htmlFor="checked_checkbox"
                  className="mr-2 text-[8px]  text-mode-color sm:text-white">
                  مرا بخاطر بسپار{" "}
                </label>
              </div>
              <LinkCp
                href="/auth/forget-pass"
                className="text-[8px] text-mode-color sm:text-white pl-4 hover:text-color-orange ">
                فراموشی رمز عبور
              </LinkCp>
            </motion.div>
            <motion.div {...stepAnimate}>
              <button
                disabled={loading}
                type="submit"
                className=" w-full shadow-modeShadow px-20 hover:scale-[1.05] disabled:opacity-50 transition duration-500 py-[6px] bg-primary text-white rounded-[4px] text-[10px] mt-4">
                {!loading ? (
                  "ورود"
                ) : (
                  <BeatLoader color="white" size={6} margin={0} />
                )}
              </button>
            </motion.div>
          </Form>
        )}
      </Formik>
    </div>
  );
                };

export default LoginForm;
