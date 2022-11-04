
import { withFormik } from "formik";
import React from "react";
import Button from "./Button";
import * as Yup from "yup";
import Input from "./Input";
import axios from "axios";
import { withUser, withAlert } from "./withProvider";



function callLoginApi(values,bag) {
  axios
    .post("https://printapp-e7875-default-rtdb.firebaseio.com/printapp.json", {

      email: values.email,
      name: values.name,
      message: values.message,
    })

    .then(() => {
      bag.props.setAlert({
        type: "Success",
        message: " Message  Successfully send  ",
      });
    })
    .catch(() => {
      bag.props.setAlert({
        type: "Error",
        message: " Message  not send  ",
      });
      
    });
}

const schema = Yup.object().shape({
  email: Yup.string().email().required(),
  name: Yup.string().required(),
  message: Yup.string().required(),
});

const initialValues = {
  email: "",
  name: "",
  message :"",

};

export function Contact({
  handleSubmit,
  values,
  errors,
  touched,
  handleChange,
  handleBlur,

}){




  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col p-5 bg-white rounded-md shadow-md w-96"
      >
        <h1 className="self-center mb-4 text-orange-500 text-2xl font-bold">
      Contact Us
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
          placeholder="Email"
          className="rounded-b-none"
        />
        <Input
          values={values.name}
          error={errors.name}
          touched={touched.name}
          onChange={handleChange}
          onBlur={handleBlur}
          label="name"
          id="xyz"
          name="name"
          type="text"
          required
          autoComplete="current-name"
          placeholder="Name"
          className="rounded-t-none"
        />
            <Input
          values={values.message}
          error={errors.message}
          touched={touched.message}
          onChange={handleChange}
          onBlur={handleBlur}
          label="message"
          id="vts"
          name="message"
          type="text"
          required
          autoComplete="current-message"
          placeholder="Message"
          className="rounded-t-none"
        />
        <Button type="sumbit" className="self-end mt-3">
       SEND MESSAGE
        </Button>
       
      
      </form>
    </div>
  );
}

const FormikContact = withFormik({
  validationSchema: schema,
  initialValues: initialValues,
  handleSubmit: callLoginApi,
})(Contact);

export default withAlert(withUser(FormikContact));

