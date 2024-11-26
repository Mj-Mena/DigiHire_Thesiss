import React from "react";
import { Button, Input, Stack } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { PasswordInput } from "@/components/ui/password-input";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Alert } from "@/components/ui/alert";
import { useState } from "react";
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
      const response = await fetch("http://127.0.0.1:8000/api/log_hr/", {
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
      {error && (
        <Alert status="error" title="Login Failed">
          Password or Email incorrect.
        </Alert>
      )}
      <div className="w-screen h-full mb-20 mt-20 pb-10">
        <div className="grid-temp ">
          <div className="formdiv grid py-20 content-center items-center px-1">
            <div className="indiv pb-10">
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
