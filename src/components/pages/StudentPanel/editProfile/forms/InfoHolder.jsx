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
    data?.data.user;

    const infoValidations = {
      fullName: Yup.string().required("Full name is required"),
      email: Yup.string()
        .required("Email is required")
        .email("Invalid email address"),
      phoneNumber: Yup.string()
        .required("Phone number is required")
        .min(12, "Phone number must be at least 12 characters"),
      nationalId: Yup.string(),
      birthDate: Yup.string().required("Birth date is required"),
    };
    const date = new Date(birthDate);
    const birthDay = date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
    console.log(birthDay)
  const infoInitialValues = {
    fullName,
    email,
    phoneNumber: "  " + phoneNumber,
    birthDate:birthDay,
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
      toast.success("Changes made successfully")
    } catch (error) {
      console.log(error)
      toast.error("An error occured")
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
            <InputHolder loading={loading} setLoading={setLoading} data={data?.data} />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default InfoHolder;
