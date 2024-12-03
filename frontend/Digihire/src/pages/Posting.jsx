import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "react-hook-form";
import "./page.css";
import { Modal } from "react-bootstrap";
import { Box, Input, Button, Grid, Textarea } from "@chakra-ui/react";
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
      const employ = data.Employment;
      const location = data.location;
      const vacancies = data.slot;
      const neededDeg = data.NeededDeg;
      const jobdesc = data.Jobdesc;
      const datatosend = {
        createdBy: user,
        JobTitle: jobtitle,
        department: dept,
        employmentTime: employ,
        location: location,
        neededDegree: neededDeg,
        neededApplicant: vacancies,
        jobdescription: jobdesc,
        status: "active",
      };
      const response = await fetch("https://127.0.0.1:8000/log_hr/postJob", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datatosend),
      });
      console.log(response);
      console.log(datatosend);
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
                <Box gridColumn="span 2">
                  <label className=" text-sm" htmlFor="post-grad-loc">
                    Employment time
                  </label>
                  <NativeSelectRoot
                    border="2px solid gray"
                    className=" grid rounded-md"
                    gridColumn="span 2"
                    width="auto"
                  >
                    <NativeSelectField
                      {...register("Employment", {
                        required: "Enter employment time",
                      })}
                      className="pl-2"
                    >
                      <option value="" disabled selected hidden>
                        Select Employment Time
                      </option>

                      <option value="Part time">Part time</option>
                      <option value="Full time">Full time</option>
                    </NativeSelectField>
                  </NativeSelectRoot>
                  {errors.Employment && (
                    <p className="text-sm text-red-500">
                      {errors.Employment.message}
                    </p>
                  )}
                </Box>
                <Box gridColumn="span 2">
                  <label className=" text-sm" htmlFor="location">
                    Location
                  </label>
                  <Input
                    {...register("location", {
                      required: "Enter the job locations",
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
                  {errors.location && (
                    <p className="text-sm text-red-500">
                      {errors.location.message}
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
                    placeholder="How many slot are there?"
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
                    Needed Degree
                  </label>
                  <Input
                    {...register("NeededDeg", {
                      required: "What is the minimum degree attained",
                    })}
                    bg="white"
                    id="post-grad-diploma"
                    placeholder="2 years of experience"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                  {errors.NeededDeg && (
                    <p className="text-sm text-red-500">
                      {errors.NeededDeg.message}
                    </p>
                  )}
                </Box>

                <Box gridColumn="span 4">
                  <label className=" text-sm" htmlFor="jobdesc">
                    Job Description and other requirements
                  </label>
                  <Textarea
                    {...register("Jobdesc", {
                      required: "What is the minimum degree attained",
                    })}
                    bg="white"
                    id="jobdesc"
                    placeholder="enter job description"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                  {errors.Jobdesc && (
                    <p className="text-sm text-red-500">
                      {errors.Jobdesc.message}
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
