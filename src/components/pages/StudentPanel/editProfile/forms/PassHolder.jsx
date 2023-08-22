'use client'
import InputText from "./InputText";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { changePass } from "@/core/services/changePass";
import { useState } from "react";
import { BarLoader, BeatLoader } from "react-spinners";
const PassHolder = ({user}) => {
  const [loading,setLoading] = useState(false)
  const changePassValidations = {
    password: Yup.string()
      .required("وارد کردن رمز عبور الزامی است")
      .min(8, "رمز عبور باید حداقل ۸ کاراکتر داشته باشد"),
      // .matches(
      //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$/,
      //   "رمز عبور باید ترکیبی از حروف لاتین بزرگ و کوچک و سمبل و اعداد باشد"
      // ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "رمز عبور مطابقت ندارد")
      .required("وارد کردن تایید رمز الزامی است"),
  };
  const passInitialValues = {
    password: "",
    confirmPassword: "",
  };
  return (
    <div className="mt-12">
      <Formik
        initialValues={passInitialValues}
        validationSchema={Yup.object(changePassValidations)}
        onSubmit={async (values,actions) => {
          console.log(values);
          setLoading(true)
         await changePass(user.studentModel._id,user.studentModel.email,user.studentModel.resetPasswordToken,values.password)
           setLoading(false) 
           actions.resetForm()
           console.log(user)
       }}>
        {() => (
          <Form>
            <div className="hlg:px-48 lg:px-0 sm:px-16 pb-2 flex flex-col">

              <InputText
                size=" mt-2"
                name="password"
                type="password"
                label="رمز عبور جدید"
                placeholder="رمز عبور جدید خود را وارد کنید"
              />
              <InputText
                size="mt-2"
                name="confirmPassword"
                type="password"
                label="تکرار رمز عبور جدید"
                placeholder="تکرار رمز عبور جدید خود را وارد کنید"
              />
              <div className="flex md:mt-0 mt-8 md:justify-start justify-center flex-row-reverse">
                <button
                disabled={loading}
                  type="submit"
                  className="bg-primary h-[40px] mt-4 flex items-center justify-center hover:scale-[1.02] transition-all duration-300 hover:shadow-boxShadow text-white rounded-lg w-fit py-2 px-8 sss:px-24 md:px-8">
                   {!loading ? "تغییر رمز" : <BeatLoader size={8} color="white"/>}
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PassHolder;
