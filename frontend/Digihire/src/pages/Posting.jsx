import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "react-hook-form";
import "./page.css";
import { Modal } from "react-bootstrap";
import { Box, Input, Button, Grid } from "@chakra-ui/react";
import {
  NativeSelectField,
  NativeSelectRoot,
} from "@/components/ui/native-select";
const Posting = ({ isOpen, onClose }) => {
  const [toast, setToast] = useState(false);
  const [show, setShow] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  // Sync `show` state with `isOpen` prop
  useEffect(() => {
    setShow(isOpen);
  }, [isOpen]);

  // Handle close button action
  const handleClose = () => {
    setShow(false);
    onClose(); // Call parent-provided `onClose` function
  };
  const onSubmit = handleSubmit(async (data) => {
    try {
      const user = localStorage.getItem("user");
      const jobtitle = data.jobTitle;
      const dept = data.dept;
      const educ = data.education;
      const joblabel = data.jobLabel;
      const jobrole = data.jobRole;
      const slot = data.slot;
      const exp = data.experience;
      const datatosend = {
        JobTitle: jobtitle,
        department: dept,
        neededDegree: educ,
        neededExp: exp,
        neededApplicant: slot,
        neededRole: jobrole,
        status: "active",
        jobLabel: joblabel,
        createdBy: user,
      };
      const response = await fetch("http://127.0.0.1:8000/log_hr/postJob", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datatosend),
      }); 
      console.log(response)
    } catch (err) {
      console.log(err);
    }
  });

  return (
    <Modal size="lg" show={show} onHide={handleClose} centered>
      <form action="" className="" onSubmit={onSubmit}>
        <Box
          as="fieldset"
          borderWidth="1px"
          borderRadius="md"
          p={5}
          borderColor="gray.200"
        >
          <Box mb={6}>
            <legend className="font-bold text-lg mb-2">Post a Job</legend>

            <Box
              maxWidth="100%"
              width="100%"
              p={6}
              bg="gray.50"
              boxShadow="md"
              borderRadius="lg"
            >
              <Grid templateColumns="repeat(4, 1fr)" gap={4}>
                <Box gridColumn="span 2">
                  <label className=" text-sm" htmlFor="post-grad-schoolname">
                    Job Title
                  </label>
                  <Input
                    {...register("jobTitle", {
                      required: "Enter the job title",
                    })}
                    bg="white"
                    id="post-grad-schoolname"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                  {errors.jobTitle && (
                    <p className="text-sm text-red-300">
                      {errors.jobTitle.message}
                    </p>
                  )}
                </Box>

                <Box gridColumn="span 2">
                  <label className=" text-sm" htmlFor="post-grad-loc">
                    Department
                  </label>
                  <NativeSelectRoot
                    border="2px solid gray"
                    className=" grid rounded-md"
                    gridColumn="span 2"
                    width="auto"
                  >
                    <NativeSelectField
                      {...register("dept", {
                        required: "Enter the Department",
                      })}
                      className="pl-2"
                    >
                      <option value="" disabled selected hidden>
                        Select Department
                      </option>
                      <option value="hr">Human Resource</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="it">Information Technology</option>
                      <option value="production">Production</option>
                    </NativeSelectField>
                  </NativeSelectRoot>
                  {errors.dept && (
                    <p className="text-sm text-red-500">
                      {errors.dept.message}
                    </p>
                  )}
                </Box>
                <Box className=" mt-8" gridColumn="span 4">
                  <label
                    className=" font-semibold text-lg"
                    htmlFor="post-grad-schoolname"
                  >
                    Qualifications
                  </label>
                </Box>

                <Box gridColumn="span 2">
                  <label className=" text-sm" htmlFor="post-grad-major">
                    Education
                  </label>
                  <Input
                    {...register("education", {
                      required: "Enter the Department",
                    })}
                    bg="white"
                    id="apost-grad-major"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                  {errors.education && (
                    <p className="text-sm text-red-500">
                      {errors.education.message}
                    </p>
                  )}
                </Box>

                <Box gridColumn="span 2">
                  <label className=" text-sm" htmlFor="post-grad-from">
                    Experience
                  </label>
                  <Input
                    {...register("experience", {
                      required: "Enter the Department",
                    })}
                    bg="white"
                    id="post-grad-from"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                  {errors.experience && (
                    <p className="text-sm text-red-500">
                      {errors.experience.message}
                    </p>
                  )}
                </Box>
                <Box gridColumn="span 2">
                  <label className=" text-sm" htmlFor="post-grad-to">
                    Job Role
                  </label>
                  <Input
                    {...register("jobRole", {
                      required: "Enter the Department",
                    })}
                    bg="white"
                    id="post-grad-to"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                  {errors.jobRole && (
                    <p className="text-sm text-red-500">
                      {errors.jobRole.message}
                    </p>
                  )}
                </Box>

                <Box gridColumn="span 2">
                  <label className=" text-sm" htmlFor="post-grad-diploma">
                    Vacancies
                  </label>
                  <Input
                    {...register("slot", {
                      required: "Enter how many vacancy we have",
                      validate: (value) => {
                        return !isNaN(Number(value)) || "Should be a number";
                      },
                      valueAsNumber: true,
                    })}
                    bg="white"
                    id="post-grad-diploma"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                  {errors.slot && (
                    <p className="text-sm text-red-500">
                      {errors.slot.message}
                    </p>
                  )}
                </Box>
                <Box gridColumn="span 2">
                  <label className=" text-sm" htmlFor="post-grad-diploma">
                    Expiration
                  </label>
                  <Input
                    {...register("expiration", {
                      required: "Enter the expiration",
                    })}
                    bg="white"
                    id="post-grad-diploma"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                  {errors.expiration && (
                    <p className="text-sm text-red-500">
                      {errors.expiration.message}
                    </p>
                  )}
                </Box>
                <Box gridColumn="span 2">
                  <label className=" text-sm" htmlFor="post-grad-diploma">
                    Job Label
                  </label>
                  <Input
                    {...register("jobLabel", {
                      required: "Enter the job label",
                    })}
                    bg="white"
                    id="post-grad-diploma"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                  {errors.expiration && (
                    <p className="text-sm text-red-500">
                      {errors.expiration.message}
                    </p>
                  )}
                </Box>
              </Grid>
            </Box>
          </Box>
        </Box>
        <Grid templateColumns="repeat(6, 1fr)" gap={4} padding={2}>
          <Button
            type="submit"
            className="col-start-6 bg-Black-Pearl text-white rounded-md text-sm"
          >
            Post a job
          </Button>
        </Grid>
      </form>
    </Modal>
  );
};

export default Posting;
