


import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";


function Forgot() {
  function callapi() {
    console.log("sending data ", values.email);
  }

  const Schema = yup.object().shape({
    email: yup
      .string()
      .required()
      .email("please include an @ in the email address"),
  });

  const {
    handleSubmit,
    values,
    handleChange,
    resetForm,
    errors,
    handleBlur,
    touched,
  } = useFormik({
    initialValues: {
      email: "",
    },

    onSubmit: callapi,
    validationSchema: Schema,
  });

  return (
    <div className=" bg-gray-100 bg-cover  h-screen flex items-center  justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white px-20 py-5 rounded-md shadow-md space-y-2 mb-10 mt-20 text-center"
      >
        <label className="text-4xl font-bold  "> Forgot</label>
        <br></br>
        
        <br></br>
    
        <input
          id="ema"
          placeholder="Enter your email"
          type="email"
          name="email"
          autoComplete="on"
          onChange={handleChange}
          value={values.email}
          onBlur={handleBlur}
          required
          className="px-20 py-2 rounded-md  border-2  border-black"
        ></input>
        {touched.email && errors.email && errors.email && (
          <div className="text-red-400 text-xl">{errors.email}</div>
        )}
        <br></br> <br></br>
        <br></br> <br></br>
        <button
          className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold px-20 py-2  rounded-lg"
          type="submit"
        >
         Forgot
        </button>
      </form>
    </div>
  );
}
export default Forgot;

