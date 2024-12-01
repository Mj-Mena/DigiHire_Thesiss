import React from "react";
import { Button, Input, Stack, Container } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { PasswordInput } from "@/components/ui/password-input";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "@/components/ui/alert";
import { useState } from "react";
import "./page.css";

const Log = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });
  const [error, setError] = useState(false); // Track errors in state
  const onSubmit = handleSubmit(async (data) => {
    try {
      const emailtosend = data.Email;
      const passtosend = data.Password;
      const datatosend = {
        email: emailtosend,
        password: passtosend,
      };
      const response = await fetch("https://192.168.254.112:8000/api/log_hr/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datatosend),
      });
      const hr = await response.json(datatosend);
      console.log(response.status);
      localStorage.setItem("access", hr.access);
      localStorage.setItem("refresh", hr.refresh);
      localStorage.setItem("user", hr.email);
      if (response.status == 200) {
        navigate(`/dashboard/${hr.email}`);
      } else {
        setError(true);
      }
      // Redirect to the dashboard with the user's email as a parameter
    } catch (err) {
      console.log(err);
    }
  });

  return (
    <>
      <div className="gradient-background flex min-h-screen">
        <div className="w-[60vw] h-[80vh] min-h-[430px] p-0 border border-solid border-white shadow-lg flex items-center justify-center bg-[#0B1E33]">
          <div className="flex-1 flex justify-center items-center p-4">
            <div className="image-container">
              <img
                src="/digihirelogo.png"
                alt="Descriptive text for image"
                className="max-w-full max-h-full object-cover"
              />
            </div>
          </div>
          <div className="formdiv grid py-40 px-12 content-end items-center">
            <div className="indiv pb-10">
              <div
                className="absolute top-5 left-1/2 transform -translate-x-1/2 z-10"
                style={{ maxWidth: "400px", width: "100%", marginTop: "10px" }}
              >
                {error && (
                  <Alert status="error" title="Login Failed">
                    Password or Email incorrect.
                  </Alert>
                )}
              </div>
              <h2 className="font-semibold text-3xl py-2 mb-10 fdiv">Log in</h2>
              <form className="" onSubmit={onSubmit}>
                <Stack gap="4" align="flex-start" maxW="sm">
                  <Field
                    label="Email address or username"
                    className="text-gray-500 mb-2"
                  >
                    <Input
                      className="inputc pl-3"
                      {...register("Email", { required: "Email is required" })}
                    />
                    {errors.Email && (
                      <p className="text-sm text-red-300">
                        {errors.Email.message}
                      </p>
                    )}
                  </Field>

                  <Field className="text-gray-500 mb-4" label="Password">
                    <PasswordInput
                      className="w-full inputc pl-3"
                      {...register("Password", {
                        required: "Password is required",
                      })}
                    />
                    {errors.Password && (
                      <p className="text-sm text-red-300">
                        {errors.Password.message}
                      </p>
                    )}
                  </Field>
                  <Link
                    style={{ textDecoration: "none" }}
                    to="/request/password_reset"
                    className=" text-Black-Pearl"
                  >
                    Forgot Password ?{" "}
                  </Link>
                  <Button
                    className="bg-Black-Pearl text-white min-w-full rounded-full"
                    type="submit"
                    isDisabled={!isValid} // Disables button if the form is invalid
                  >
                    Submit
                  </Button>
                </Stack>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Log;
