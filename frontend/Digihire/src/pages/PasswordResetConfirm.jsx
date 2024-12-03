import React from "react";
import { Button, Input, Stack, Container } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { PasswordInput } from "@/components/ui/password-input";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "@/components/ui/alert";
import { useState } from "react";
import "./page.css";
import { useParams } from "react-router-dom";
const PasswordResetConfirm = () => {
  const { token } = useParams();
  console.log(token);
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
      const passwords = data.Password;
      const datatosend = {
        password: passwords,
        token: token,
      };
      const response = await fetch(
        "https://127.0.0.1:8000/password_reset/confirm",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(datatosend),
        }
      );
      if (response.status == 200) {
        console.log("Password changed ty : > ");
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
      <form className="" onSubmit={onSubmit}>
        <Stack gap="4" align="flex-start" maxW="sm">
          <Field
            label="Enter your new Password please"
            className="text-gray-500 mb-2"
          >
            <Input
              className="inputc pl-3"
              {...register("Password", { required: "Password is required" })}
            />
            {errors.Email && (
              <p className="text-sm text-red-300">{errors.Password.message}</p>
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
    </>
  );
};

export default PasswordResetConfirm;
