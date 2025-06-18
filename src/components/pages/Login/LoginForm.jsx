"use client";
import { Formik, Form, Field } from "formik";
import { motion } from "framer-motion";
import { stepAnimate } from "@/constant/stepperInputAnimation";
import * as Yup from "yup";
import TextInput from "../Register/stepBox/TextInput";
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
    remember: false,
  };
  const onSubmit = async (value, actions) => {
    console.log("value :", value);
    setLoading(true);

    const { isSuccess } = await loginFunc(value);
    if (isSuccess) {
      setLoading(false);
      toast.success("Login successful");
      setTimeout(() => {
        toast.info("Moving to home page");
      }, 500);
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
      .email("Email format is invalid")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 character"),
    remember: Yup.boolean(),
  };
  return (
    <div className="scale-[1.4] mt-5">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={Yup.object(validationSchema)}>
        {() => (
          <Form className=" pt-8 text-white">
            <TextInput color="white" name="email" label="Email" type="email" />
            <TextInput
              color="white"
              name="password"
              label="Password"
              type="password"
            />

            <motion.div
              {...stepAnimate}
              className="flex mt-2 mr-2 w-full items-center justify-between">
              <div className="flex items-center">
                <Field
                  name="remember"
                  render={({ field, form: { touched, errors } }) => (
                    <input
                      {...field}
                      ref={input}
                      id="checked_checkbox"
                      type="checkbox"
                      value=""
                      className="w-3 h-3 text-blue-600 bg-gray-100 focus:outline-none rounded outline-none border-none dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                  )}
                />
                <label
                  htmlFor="checked_checkbox"
                  className="ml-2 text-[8px]  text-mode-color sm:text-white">
                  Remember me{" "}
                </label>
              </div>
              <LinkCp
                href="/auth/forget-pass"
                className="text-[8px] text-mode-color sm:text-white pl-4 hover:text-color-orange ">
                Forgot password
              </LinkCp>
            </motion.div>
            <motion.div {...stepAnimate}>
              <button
                disabled={loading}
                type="submit"
                className=" w-full shadow-modeShadow px-20 hover:scale-[1.05] disabled:opacity-50 transition duration-500 py-[6px] bg-primary text-white rounded-[4px] text-[10px] mt-4">
                {!loading ? (
                  "Login"
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
