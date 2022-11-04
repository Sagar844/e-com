import { withFormik } from "formik";
import React from "react";
import Button from "./Button";
import * as Yup from "yup";
import Input from "./Input";
import axios from "axios";
import { withUser, withAlert } from "./withProvider";

function callLoginApi(values,bag) {
  axios
    .post("https://myeasykart.codeyogi.io/signup", {
      fullName : values.fullName,  
      email: values.email,
      password: values.myPassword,
    })
    
    .then((response) => {
      const { user, token } = response.data;
      localStorage.setItem("token", token);
      bag.props.setUser(user);
      bag.props.setAlert({
          type: "Success",
          message:"Account created. Please login  " + user.email,

      })
  
    })
    .catch(() => {
      bag.props.setAlert({
        type: "Error",
        message:"Signup Filed"

    })

    });
}

const schema = Yup.object().shape({
fullName: Yup.string(),
  email: Yup.string().email().required(),
  myPassword: Yup.string().min(6).max(12).required(),
});

const initialValues = {
  fullName:"" , 
  email: "",
  myPassword: "",
};

export function Signup({
  handleSubmit,
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
}) {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col p-5 bg-white rounded-md shadow-md w-96"
      >
        <h1 className="self-center mb-4 text-orange-500 text-2xl font-bold">
          Signup to Trycasuals
        </h1>

        <Input
          values={values.fullName}
          error={errors.fullName}
          touched={touched.fullName}
          onChange={handleChange}
          onBlur={handleBlur}
          label="fullName"
          id="fullName"
          name="fullName"
          type="text"
          required
          autoComplete="on"
          placeholder=" Username"
          className="rounded-b-none"
        />
        <Input
          values={values.email}
          error={errors.email}
          touched={touched.email}
          onChange={handleChange}
          onBlur={handleBlur}
          label="Email address"
          id="email-address"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="Email or Username"
          className="rounded-b-none"
        />
        <Input
          values={values.myPassword}
          error={errors.myPassword}
          touched={touched.myPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          label="Password"
          id="xyz"
          name="myPassword"
          type="password"
          required
          autoComplete="current-password"
          placeholder="Password"
          className="rounded-t-none"
        />
        <Button type="sumbit" className="self-end mt-3">
          Signup
        </Button>
      </form>
    </div>
  );
}

const FormikSignup = withFormik({
  validationSchema: schema,
  initialValues: initialValues,
  handleSubmit: callLoginApi,
})(Signup);

export default withAlert(withUser(FormikSignup));

