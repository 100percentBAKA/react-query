import { Box, Button, TextField, styled } from "@mui/material";
import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { useAddFrenzData, useCustomApiData } from "../hooks/useCustomApiData";

// styled components
const StyledForm = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  width: "fit-content",
}));

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const LOGIN_SCHEMA = yup.object().shape({
  username: yup
    .string()
    .min(5, "Username must be a minimum of 5 characters")
    .required("Username is required"),
  password: yup
    .string()
    .min(5, "Password must be a minimum of 5 characters")
    .matches(
      passwordRules,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    )
    .required("Password is required"),
});

export default function AddData() {
  const { mutate: addLoginData, isLoading } = useAddFrenzData();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: LOGIN_SCHEMA,
    onSubmit: (values) => {
      addLoginData(values);
    },
  });

  //   const { data: loginData } = useCustomApiData(
  //     "http://localhost:4000",
  //     "login",
  //     {}
  //   );

  //   console.log(loginData?.data);

  return (
    <Box>
      <h1>Form</h1>
      <StyledForm autoComplete="off" onSubmit={formik.handleSubmit}>
        <StyledTextField
          id="username"
          name="username"
          label="Username"
          variant="outlined"
          values={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.username && formik.errors.username}
        />
        {/* error message display for username */}
        {formik.touched.username && formik.errors.username ? (
          <div>{formik.errors.username}</div>
        ) : null}
        <StyledTextField
          type="password"
          id="password"
          name="password"
          label="Password"
          variant="outlined"
          values={formik.values.password}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={Boolean(formik.touched.password && formik.errors.password)}
        />
        {/* error message display for password */}
        {formik.touched.password && formik.errors.password ? (
          <div style={{ color: "red" }}>{formik.errors.password}</div>
        ) : null}

        {isLoading ? (
          <Button disabled variant="outlined">
            Loading . . .
          </Button>
        ) : (
          <Button
            variant="outlined"
            sx={{ width: "fit-content" }}
            type="submit"
          >
            Submit
          </Button>
        )}
      </StyledForm>
    </Box>
  );
}
