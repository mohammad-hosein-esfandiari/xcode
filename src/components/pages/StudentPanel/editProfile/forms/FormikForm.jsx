"use client";
import { Form, Formik } from "formik";
import * as Yup from "yup";

const FormikForm = ({ children, validation, initialValues, onSubmit }) => {
  const submitHandler = (values) => {
    onSubmit(values);
  };
  return (
    <div className="mt-12">
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object(validation)}
        onSubmit={(values) => {
          submitHandler(values);
        }}>
        {() => <Form>{children}</Form>}
      </Formik>
    </div>
  );
};

export default FormikForm;
