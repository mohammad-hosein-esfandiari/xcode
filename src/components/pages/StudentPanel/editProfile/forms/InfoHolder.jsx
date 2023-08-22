"use client";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import InputHolder from "./InputHolder";
import { useUserInfoReq } from "@/core/services/useUserInfoReq";
import ProfileImg from "../ProfileImg";
import { useImage } from "@/context/imageStore";
import api from "@/core/interceptors/apiInterceptor";
import { useUserInfo } from "@/context/userInfoStore";
import { setCookie } from "@/core/utils/cookies.storage";
import { useState } from "react";
import { toast } from "react-toastify";

const InfoHolder = ({ user }) => {
  const [loading,setLoading] = useState(false)
  const { data, isLoading, isError, error } = useUserInfoReq(user.studentModel._id);
  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>{error.message}</h1>;
  const { fullName, email, phoneNumber, birthDate, nationalId } =
    data?.data.result;

  const infoValidations = {
    fullName: Yup.string().required("وارد کردن نام و نام خانوادگی الزامی است"),
    email: Yup.string()
      .required("وارد کردن پست الکترونیک الزامی است")
      .email("پست الکترونیک وارد شده اشتباه است"),
    phoneNumber: Yup.string()
      .required("وارد کردن شماره تماس الزامی است")
      .min(14, "شماره تماس باید حداقل ۱۰ کاراکتر باشد"),
    nationalId: Yup.string(),
    birthDate: Yup.string().required("وارد کردن تاریخ تولد الزامی است"),
  };

  const infoInitialValues = {
    fullName,
    email,
    phoneNumber: "  " + phoneNumber,
    birthDate,
    nationalId,
  };

  const submitHandler = async (values) => {
    const { fullName, email, phoneNumber, birthDate, nationalId } = values;
    const obj = {
      fullName,
      email,
      phoneNumber:phoneNumber.trim(),
      birthDate,
      nationalId,
      profile: useImage.getState().image,
    };
    setLoading(true)
    try {
      const res = await api.put('/student/'+user.studentModel._id,obj)
      console.log(res)
      useUserInfo.getState().setUserItemObj(obj)
      setCookie('UoXa-I',res.data.result,30)
      setLoading(false)
      toast.success("تغییرات با موفقیت انجام شد")
    } catch (error) {
      console.log(error)
      toast.error('خطایی رخ داده است')
      setLoading(false)
    }
  };
  return (
    <div className="mt-12">
      <Formik
        enableReinitialize={true}
        initialValues={infoInitialValues}
        validationSchema={Yup.object(infoValidations)}
        onSubmit={(values) => {
          submitHandler(values);
        }}>
        {() => (
          <Form>
            <InputHolder loading={loading} setLoading={setLoading} data={data?.data?.result} />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default InfoHolder;
