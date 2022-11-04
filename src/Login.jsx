import { withFormik } from "formik";
import React from "react";
import Button from "./Button";
import * as Yup from "yup";
import Input from "./Input";
import axios from "axios";
import { withUser, withAlert } from "./withProvider";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

function callLoginApi(values, bag) {
  axios
    .post("https://myeasykart.codeyogi.io/login", {
      email: values.email,
      password: values.myPassword,
    })

    .then((response) => {
      const { user, token } = response.data;
      localStorage.setItem("token", token);
      bag.props.setUser(user);
      bag.props.setAlert({
        type: "Success",
        message: " Successfully logged in"  ,
      });
    })
    .catch(() => {
      bag.props.setAlert({
        type: "Error",
        message: "Invalid Credentials " + values.myPassword + values.email,
      });
    })
}

const schema = Yup.object().shape({
  email: Yup.string().email().required(),
  myPassword: Yup.string().min(6).max(12).required(),
});

const initialValues = {
  email: "",
  myPassword: "",
};

export function Login({
  handleSubmit,
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  user,
}) {
  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col p-5 bg-white rounded-md shadow-md w-96"
      >
        <h1 className="self-center mb-4 text-orange-500 text-2xl font-bold">
          Login to Trycasuals
        </h1>
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
          Login
        </Button>
        <span className="mt-3"> Not a Member?</span>
        <Link  className=" hover:border-blue-400 border-2 rounded-md py-3 px-0 text-center mb-2 " to="/Signup">Signup</Link>
        <Link className=" hover:border-blue-400 border-2 rounded-md py-3 px-0 text-center   " to="/Forgot">Forgot</Link>
      </form>
    </div>
  );
}

const FormikLogin = withFormik({
  validationSchema: schema,
  initialValues: initialValues,
  handleSubmit: callLoginApi,
})(Login);

export default withAlert(withUser(FormikLogin));
