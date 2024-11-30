import React, { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  Input,
  Grid,
  GridItem,
  HStack,
  Stack,
  AspectRatio,
} from "@chakra-ui/react";
import { Radio, RadioGroup } from "@/components/ui/radio";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [currentTab, setCurrentTab] = useState("personal");
  const tabOrder = [
    "personal",
    "family",
    "education",
    "employment",
    "training/course",
    "organizations",
    "references",
    "location",
  ];
  const tabContainerRef = useRef(null);
  const onSubmit = (data) => {
    console.log("Form submitted successfully:", data);
    // Handle final form submission logic here
  };
  const handleNext = async () => {
    try {
      await handleSubmit((data) => {
        console.log("Tab data is valid:", data);
        const currentIndex = tabOrder.indexOf(currentTab);
        if (currentIndex < tabOrder.length - 1) {
          setCurrentTab(tabOrder[currentIndex + 1]);
        } else {
          console.log("End of tabs");
          onSubmit(); // Final submission logic
        }
      })(); // Trigger form validation
      // Move to the next tab if no validation errors
    } catch (error) {
      // Validation errors prevent navigation
      console.log("Validation failed, cannot proceed to the next tab.");
    }
  };

  const handleBack = () => {
    const currentIndex = tabOrder.indexOf(currentTab);
    if (currentIndex > 0) {
      setCurrentTab(tabOrder[currentIndex - 1]);
    }
  };
  useEffect(() => {
    const activeTab = document.getElementById(currentTab);
    if (activeTab && tabContainerRef.current) {
      activeTab.scrollIntoView({ behavior: "smooth", inline: "center" });
    }
  }, [currentTab]);

  return (
    <Grid
      templateColumns={{ base: "1fr", md: "repeat(6, 1fr)" }}
      gap={6}
      minHeight="100vh"
      bg="gray.50"
      p={6}
    >
      {/* Form Content */}
      <GridItem colSpan={{ base: 1, md: 4 }} colStart={{ base: 1, md: 2 }}>
        <Box
          maxWidth="100%"
          width="100%"
          p={6}
          bg="gray.50"
          boxShadow="md"
          borderRadius="lg"
        >
          {/* Tabs */}
          <Box
            ref={tabContainerRef}
            display="flex"
            gap={6}
            mb={6}
            alignItems="center"
            style={{
              whiteSpace: "nowrap", // Prevent wrapping of buttons>
            }}
          >
            <Button
              key={"personal"}
              id={"personal"}
              bg="transparent"
              color={currentTab === "personal" ? "#0B1E33" : "#0B1E33.500"}
              _hover={{ bg: "transparent", color: "#0B1E33" }}
              _focus={{ outline: "none" }}
              borderBottom={
                currentTab === "personal" ? "2px solid #013c58" : "none"
              }
              fontWeight={currentTab === "personal" ? "bold" : "normal"}
              p={currentTab === "personal" ? 1 : 2} // Increase padding for active tab
              transition="all 0.3s ease-in-out"
              isDisabled={true}
            >
              <img src={"/person.png"} className="w-6 h-6" />
              Personal
            </Button>
            <Button
              key={"family"}
              id={"family"}
              bg="transparent"
              color={currentTab === "family" ? "#0B1E33" : "#0B1E33.500"}
              _hover={{ bg: "transparent", color: "#0B1E33" }}
              _focus={{ outline: "none" }}
              borderBottom={
                currentTab === "family" ? "2px solid #013c58" : "none"
              }
              fontWeight={currentTab === "family" ? "bold" : "normal"}
              p={currentTab === "family" ? 1 : 2} // Increase padding for active tab
              transition="all 0.3s ease-in-out"
              isDisabled={true}
            >
              <img src={"/family.png"} className="w-5 h-5" />
              Family
            </Button>
            <Button
              key={"education"}
              id={"education"}
              bg="transparent"
              color={currentTab === "education" ? "#0B1E33" : "#0B1E33.500"}
              _hover={{ bg: "transparent", color: "#0B1E33" }}
              _focus={{ outline: "none" }}
              borderBottom={
                currentTab === "education" ? "2px solid #013c58" : "none"
              }
              fontWeight={currentTab === "education" ? "bold" : "normal"}
              p={currentTab === "education" ? 1 : 2} // Increase padding for active tab
              transition="all 0.3s ease-in-out"
              isDisabled={true}
            >
              <img src={"/education.png"} className="w-6 h-6" />
              Education
            </Button>
            <Button
              key={"employment"}
              id={"employment"}
              bg="transparent"
              color={currentTab === "employment" ? "#0B1E33" : "#0B1E33.500"}
              _hover={{ bg: "transparent", color: "#0B1E33" }}
              _focus={{ outline: "none" }}
              borderBottom={
                currentTab === "employment" ? "2px solid #013c58" : "none"
              }
              fontWeight={currentTab === "employment" ? "bold" : "normal"}
              p={currentTab === "employment" ? 1 : 2} // Increase padding for active tab
              transition="all 0.3s ease-in-out"
              isDisabled={true}
            >
              <img src={"/workexp.png"} className="w-6 h-6" />
              Employment
            </Button>
            <Button
              key={"training/course"}
              id={"training/course"}
              bg="transparent"
              color={
                currentTab === "training/course" ? "#0B1E33" : "#0B1E33.500"
              }
              _hover={{ bg: "transparent", color: "#0B1E33" }}
              _focus={{ outline: "none" }}
              borderBottom={
                currentTab === "training/course" ? "2px solid #013c58" : "none"
              }
              fontWeight={currentTab === "training/course" ? "bold" : "normal"}
              p={currentTab === "training/course" ? 1 : 2} // Increase padding for active tab
              transition="all 0.3s ease-in-out"
              isDisabled={true}
            >
              <img src={"/seminar.png"} className="w-6 h-6" />
              Training & Seminars
            </Button>
            <Button
              key={"organizations"}
              id={"organizations"}
              bg="transparent"
              color={currentTab === "organizations" ? "#0B1E33" : "#0B1E33.500"}
              _hover={{ bg: "transparent", color: "#0B1E33" }}
              _focus={{ outline: "none" }}
              borderBottom={
                currentTab === "organizations" ? "2px solid #013c58" : "none"
              }
              fontWeight={currentTab === "organizations" ? "bold" : "normal"}
              p={currentTab === "organizations" ? 1 : 2} // Increase padding for active tab
              transition="all 0.3s ease-in-out"
              isDisabled={true}
            >
              <img src={"/organization.png"} className="w-6 h-6" />
              Organizations
            </Button>
            <Button
              key={"references"}
              id={"references"}
              bg="transparent"
              color={currentTab === "references" ? "#0B1E33" : "#0B1E33.500"}
              _hover={{ bg: "transparent", color: "#0B1E33" }}
              _focus={{ outline: "none" }}
              borderBottom={
                currentTab === "references" ? "2px solid #013c58" : "none"
              }
              fontWeight={currentTab === "references" ? "bold" : "normal"}
              p={currentTab === "references" ? 1 : 2} // Increase padding for active tab
              transition="all 0.3s ease-in-out"
              isDisabled={true}
            >
              <img src={"/referral.png"} className="w-6 h-6" />
              References
            </Button>
            <Button
              key={"location"}
              id={"location"}
              bg="transparent"
              color={currentTab === "location" ? "#0B1E33" : "#0B1E33.500"}
              _hover={{ bg: "transparent", color: "#0B1E33" }}
              _focus={{ outline: "none" }}
              borderBottom={
                currentTab === "location" ? "2px solid #013c58" : "none"
              }
              fontWeight={currentTab === "location" ? "bold" : "normal"}
              p={currentTab === "location" ? 1 : 2} // Increase padding for active tab
              transition="all 0.3s ease-in-out"
              isDisabled={true}
            >
              <img src={"/location.png"} className="w-6 h-6" />
              Location
            </Button>
          </Box>

          {/* Tab Content */}
          {/* Personal information */}
          {currentTab === "personal" && (
            <Box
              as="fieldset"
              borderWidth="1px"
              borderRadius="md"
              p={5}
              borderColor="gray.200"
            >
              <legend className="font-medium text-lg mb-4">
                Personal Details
              </legend>
              <Grid templateColumns="repeat(4, 1fr)" gap={4}>
                <Box>
                  <label htmlFor="last-name">Last Name</label>
                  <Input
                    {...register("Last_name", {
                      required: "Last name is required",
                    })}
                    bg="white"
                    id="last-name"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                  {errors.Last_name && (
                    <p className="text-sm text-red-300">
                      {errors.Last_name.message}
                    </p>
                  )}
                </Box>
                <Box>
                  <label bg="grey.50" htmlFor="first-name">
                    First Name
                  </label>
                  <Input
                    {...register("First_name", {
                      required: "First name is required",
                    })}
                    bg="white"
                    id="first-name"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                  {errors.First_name && (
                    <p className="text-sm text-red-300">
                      {errors.First_name.message}
                    </p>
                  )}
                </Box>
                <Box>
                  <label htmlFor="middle-name">Middle Name</label>
                  <Input
                    {...register("Middle_name", {
                      required: "Middle name is required",
                    })}
                    bg="white"
                    id="middle-name"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                  {errors.Middle_name && (
                    <p className="text-sm text-red-300">
                      {errors.Middle_name.message}
                    </p>
                  )}
                </Box>
                <Box>
                  <label htmlFor="name-ext">Name Extension</label>
                  <Input
                    bg="white"
                    id="name-ext"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                </Box>
                <Box gridColumn={{ base: "span 2", md: "span 2" }}>
                  <label htmlFor="email">Email Address</label>
                  <Input
                    {...register("Email", {
                      required: "Email is required",
                    })}
                    bg="white"
                    id="email"
                    type="email"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                  {errors.Email && (
                    <p className="text-sm text-red-300">
                      {errors.Email.message}
                    </p>
                  )}
                </Box>
                <Box gridColumn={{ base: "span 2", md: "span 2" }}>
                  <label htmlFor="facebook-account">Facebook Account</label>
                  <Input
                    {...register("Fb", {
                      required: "Facebook is required",
                    })}
                    bg="white"
                    id="facebook-account"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                  {errors.Fb && (
                    <p className="text-sm text-red-300">{errors.Fb.message}</p>
                  )}
                </Box>
                <Box gridColumn={{ base: "span 3", md: "span 4" }}>
                  <label htmlFor="present-address">Present Address</label>
                  <Input
                    {...register("PresAdd", {
                      required: "Present address is required",
                    })}
                    bg="white"
                    id="present-address"
                    placeholder="House Number, Street, Barangay, City, Province, ZIP code"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                  {errors.PresAdd && (
                    <p className="text-sm text-red-300">
                      {errors.PresAdd.message}
                    </p>
                  )}
                </Box>
                <Box gridColumn={{ base: "span 3", md: "span 4" }}>
                  <label htmlFor="permanent-address">Permanent Address</label>
                  <Input
                    {...register("PermaAdd", {
                      required: "Permanent address is required",
                    })}
                    bg="white"
                    id="permanent-address"
                    placeholder="House Number, Street, Barangay, City, Province, ZIP code"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                  {errors.PermaAdd && (
                    <p className="text-sm text-red-300">
                      {errors.PermaAdd.message}
                    </p>
                  )}
                </Box>
                <Box>
                  <label htmlFor="sex">Sex</label>
                  <Input
                    {...register("Sex", {
                      required: "Sex is required",
                    })}
                    bg="white"
                    id="sex"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                  {errors.Sex && (
                    <p className="text-sm text-red-300">{errors.Sex.message}</p>
                  )}
                </Box>
                <Box>
                  <label htmlFor="civilstatus">Civil Status</label>
                  <Input
                    {...register("Civil", {
                      required: "Civil status is required",
                    })}
                    bg="white"
                    id="civilstatus"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                  {errors.Civil && (
                    <p className="text-sm text-red-300">
                      {errors.Civil.message}
                    </p>
                  )}
                </Box>
                <Box>
                  <label htmlFor="height">Height</label>
                  <Input
                    {...register("Height", {
                      required: "Height is required",
                    })}
                    bg="white"
                    id="height"
                    placeholder="cm"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                  {errors.Height && (
                    <p className="text-sm text-red-300">
                      {errors.Height.message}
                    </p>
                  )}
                </Box>
                <Box>
                  <label htmlFor="weight">Weight</label>
                  <Input
                    {...register("Weight", {
                      required: "Weight is required",
                    })}
                    bg="white"
                    id="weight"
                    placeholder="Kg"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                  {errors.Weight && (
                    <p className="text-sm text-red-300">
                      {errors.Weight.message}
                    </p>
                  )}
                </Box>
                <Box>
                  <label htmlFor="mobile-number">Mobile Number</label>
                  <Input
                    {...register("Mobile", {
                      required: "Mobile number is required",
                    })}
                    bg="white"
                    id="mobile-number"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                  {errors.Mobile && (
                    <p className="text-sm text-red-300">
                      {errors.Mobile.message}
                    </p>
                  )}
                </Box>
                <Box>
                  <label htmlFor="landline">Landline</label>
                  <Input
                    bg="white"
                    id="landline"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                </Box>
                <Box gridColumn={{ base: "span 2", md: "span 2" }}>
                  <label htmlFor="birth-date">Date of Birth</label>
                  <Input
                    {...register("Birthdate", {
                      required: "Birthdate is required",
                    })}
                    bg="white"
                    id="birth-date"
                    placeholder="MM/DD/YYYY"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                  {errors.Birthdate && (
                    <p className="text-sm text-red-300">
                      {errors.Birthdate.message}
                    </p>
                  )}
                </Box>
                <Box>
                  <label htmlFor="tin">Tin #</label>
                  <Input
                    {...register("Tin", {
                      required: "Tin number is required",
                    })}
                    bg="white"
                    id="tin"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                  {errors.Tin && (
                    <p className="text-sm text-red-300">{errors.Tin.message}</p>
                  )}
                </Box>
                <Box>
                  <label htmlFor="sss">SSS #</label>
                  <Input
                    {...register("SSS", {
                      required: "SSS number is required",
                    })}
                    bg="white"
                    id="sss"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                  {errors.SSS && (
                    <p className="text-sm text-red-300">{errors.SSS.message}</p>
                  )}
                </Box>
                <Box>
                  <label htmlFor="pag-ibig">Pag-ibig #</label>
                  <Input
                    {...register("Pag_ibig", {
                      required: "Pag-ibig number is required",
                    })}
                    bg="white"
                    id="pag-ibig"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                  {errors.Pag_ibig && (
                    <p className="text-sm text-red-300">
                      {errors.Pag_ibig.message}
                    </p>
                  )}
                </Box>
                <Box>
                  <label htmlFor="philhealth">Philhealth #</label>
                  <Input
                    {...register("Philhealth", {
                      required: "Philhealth number is required",
                    })}
                    bg="white"
                    id="philhealth"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                  {errors.Philhealth && (
                    <p className="text-sm text-red-300">
                      {errors.Philhealth.message}
                    </p>
                  )}
                </Box>
                <Box>
                  <label htmlFor="nationality">Nationality</label>
                  <Input
                    {...register("Nationality", {
                      required: "Nationality is required",
                    })}
                    bg="white"
                    id="nationality"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                  {errors.Nationality && (
                    <p className="text-sm text-red-300">
                      {errors.Nationality.message}
                    </p>
                  )}
                </Box>
                <Box>
                  <label htmlFor="religion">Religion</label>
                  <Input
                    {...register("Religion", {
                      required: "Religion is required",
                    })}
                    bg="white"
                    id="religion"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                  {errors.Religion && (
                    <p className="text-sm text-red-300">
                      {errors.Religion.message}
                    </p>
                  )}
                </Box>
                <Box>
                  <label htmlFor="language">Language spoken</label>
                  <Input
                    {...register("Language", {
                      required: "Language is required",
                    })}
                    bg="white"
                    id="language"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                  {errors.Language && (
                    <p className="text-sm text-red-300">
                      {errors.Language.message}
                    </p>
                  )}
                </Box>
                <Box gridColumn={{ base: "span 1", md: "span 2" }}>
                  <label htmlFor="how">
                    How did you learn about our company?
                  </label>
                  <Input
                    {...register("Media", {
                      required:
                        "Provide where did find the company advertisment",
                    })}
                    bg="white"
                    id="how"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                  {errors.Media && (
                    <p className="text-sm text-red-300">
                      {errors.Media.message}
                    </p>
                  )}
                </Box>
                <Box gridColumn={{ base: "span 2", md: "span 4" }}>
                  <label htmlFor="how">
                    Do you have any relative working in our company?
                  </label>
                  <RadioGroup defaultValue="1">
                    <HStack gap="4">
                      <Radio value="1">Yes</Radio>
                      <Radio value="2">No</Radio>
                      <Radio value="3">Not applicable</Radio>
                    </HStack>
                  </RadioGroup>
                </Box>
                <Box gridColumn="span 2">
                  <label htmlFor="how">If yes, Name </label>
                  <Input
                    bg="white"
                    id="referal"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                </Box>
                <Box gridColumn="span 2">
                  <label htmlFor="referal1">Relationship</label>

                  <Input
                    {...register("Refrel", {
                      required: "Provide answer",
                    })}
                    bg="white"
                    id="referal1"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                  {errors.Refrel && (
                    <p className="text-sm text-red-300">
                      {errors.Refrel.message}
                    </p>
                  )}
                </Box>
                <Box gridColumn={{ base: "span 2", md: "span 4" }}>
                  <label htmlFor="how">Are you currently employed?</label>
                  <RadioGroup defaultValue="1">
                    <HStack gap="4">
                      <Radio value="1">Yes</Radio>
                      <Radio value="2">No</Radio>
                    </HStack>
                  </RadioGroup>
                </Box>
                <Box gridColumn="span 2">
                  <label htmlFor="availability">
                    Date available to begin work
                  </label>
                  <Input
                    {...register("Availability", {
                      required: "Provide answer",
                    })}
                    bg="white"
                    id="availability"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                  {errors.Availability && (
                    <p className="text-sm text-red-300">
                      {errors.Availability.message}
                    </p>
                  )}
                </Box>
                <Box gridColumn="span 2">
                  <label htmlFor="salary">Salary Expectation</label>
                  <Input
                    {...register("Salary", {
                      required: "Provide answer",
                    })}
                    bg="white"
                    id="salary"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                  {errors.Salary && (
                    <p className="text-sm text-red-300">
                      {errors.Salary.message}
                    </p>
                  )}
                </Box>
              </Grid>
            </Box>
          )}

          {/* Family information */}

          {currentTab === "family" && (
            <Box
              as="fieldset"
              borderWidth="1px"
              borderRadius="md"
              p={5}
              borderColor="gray.200"
            >
              <legend className="font-medium text-lg mb-4">
                Family Details
              </legend>
              <Grid templateColumns="repeat(4, 1fr)" gap={4}>
                <Box gridColumn={{ base: "span 2", md: "span 2" }}>
                  <label htmlFor="father-name">Father's Name</label>
                  <Input
                    {...register("Father_name", {
                      required: "Provide answer",
                    })}
                    bg="white"
                    id="father-name"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                  {errors.Father_name && (
                    <p className="text-sm text-red-300">
                      {errors.Father_name.message}
                    </p>
                  )}
                </Box>
                <Box gridColumn={{ base: "span 2", md: "span 2" }}>
                  <label htmlFor="father-contact">Contact number</label>
                  <Input
                    {...register("Father_contact", {
                      required: "Provide answer",
                    })}
                    bg="white"
                    id="father-contact"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                  {errors.Father_contact && (
                    <p className="text-sm text-red-300">
                      {errors.Father_contact.message}
                    </p>
                  )}
                </Box>
                <Box gridColumn={{ base: "span 2", md: "span 2" }}>
                  <label htmlFor="mother-name">Mother's Name</label>
                  <Input
                    {...register("Mother_name", {
                      required: "Mother_name is required",
                    })}
                    bg="white"
                    id="mother-name"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                  {errors.Mother_name && (
                    <p className="text-sm text-red-300">
                      {errors.Mother_name.message}
                    </p>
                  )}
                </Box>
                <Box gridColumn={{ base: "span 2", md: "span 2" }}>
                  <label htmlFor="mother-contact">Contact number</label>
                  <Input
                    {...register("Mother_contact", {
                      required: "Mother_contact is required",
                    })}
                    bg="white"
                    id="mother-contact"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                  {errors.Mother_contact && (
                    <p className="text-sm text-red-300">
                      {errors.Mother_contact.message}
                    </p>
                  )}
                </Box>
                <Box gridColumn={{ base: "span 3", md: "span 4" }}>
                  <label htmlFor="parents-address">Address</label>
                  <Input
                    {...register("Parents_address", {
                      required: "Parents_address is required",
                    })}
                    bg="white"
                    id="parents-address"
                    placeholder="House Number, Street, Barangay, City, Province, ZIP code"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                  {errors.Parents_address && (
                    <p className="text-sm text-red-300">
                      {errors.Parents_address.message}
                    </p>
                  )}
                </Box>

                <Box gridColumn={{ base: "span 2", md: "span 4" }}>
                  <label htmlFor="how">
                    Number of Siblings (Please list down from Eldest to
                    Youngest)
                  </label>
                  <Box
                    maxWidth="100%"
                    width="100%"
                    p={6}
                    bg="gray.50"
                    boxShadow="lg"
                    borderRadius="lg"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  >
                    <Stack direction="row" h="50" gap="4">
                      <Box gridColumn={{ base: "span 2", md: "span 3" }} p={2}>
                        <label htmlFor="sibling-names">Siblings Name</label>
                        <Input
                          {...register("Sibling1")}
                          bg="white"
                          id="sibling1"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          {...register("Sibling2")}
                          bg="white"
                          id="sibling2"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          {...register("Sibling3")}
                          bg="white"
                          id="sibling3"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          {...register("Sibling4")}
                          bg="white"
                          id="sibling4"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          {...register("Sibling5")}
                          bg="white"
                          id="sibling5"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                      </Box>
                      <Box gridColumn={{ base: "span 1", md: "span 1" }} p={2}>
                        <label htmlFor="sibling-names">Age</label>
                        <Input
                          {...register("Sibling1Age")}
                          bg="white"
                          id="sibling1"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          {...register("Sibling2Age")}
                          bg="white"
                          id="sibling2"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          {...register("Sibling3Age")}
                          bg="white"
                          id="sibling3"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          {...register("Sibling4Age")}
                          bg="white"
                          id="sibling4"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          {...register("Sibling5Age")}
                          bg="white"
                          id="sibling5"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                      </Box>
                      <Box gridColumn={{ base: "span 2", md: "span 2" }} p={2}>
                        <label htmlFor="sibling-names">Occupation</label>
                        <Input
                          {...register("Sibling1Occu")}
                          bg="white"
                          id="sibling1"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          {...register("Sibling2Occu")}
                          bg="white"
                          id="sibling2"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          {...register("Sibling3Occu")}
                          bg="white"
                          id="sibling3"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          {...register("Sibling4Occu")}
                          bg="white"
                          id="sibling4"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          {...register("Sibling5Occu")}
                          bg="white"
                          id="sibling5"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                      </Box>
                      <Box gridColumn={{ base: "span 2", md: "span 2" }} p={2}>
                        <label htmlFor="sibling-names">Contact #</label>
                        <Input
                          {...register("Sibling1Cont")}
                          bg="white"
                          id="sibling1"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          {...register("Sibling2Cont")}
                          bg="white"
                          id="sibling2"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          {...register("Sibling3Cont")}
                          bg="white"
                          id="sibling3"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          {...register("Sibling4Cont")}
                          bg="white"
                          id="sibling4"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          {...register("Sibling5Cont")}
                          bg="white"
                          id="sibling5"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                      </Box>
                    </Stack>
                  </Box>
                </Box>
                <Box gridColumn={{ base: "span 2", md: "span 2" }}>
                  <legend className="font-medium text-lg mb-2">
                    If married:
                  </legend>
                  <label htmlFor="spouse-name">Spouse's Name</label>
                  <Input
                    bg="white"
                    id="spouse-name"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                </Box>
                <Box colSpan={2} mt={10}>
                  <label htmlFor="children-count">Occupation</label>
                  <Input
                    bg="white"
                    id="children-count"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                </Box>
                <Box colSpan={2} mt={10}>
                  <label htmlFor="mother-contact">Contact number</label>
                  <Input
                    bg="white"
                    id="mother-contact"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                </Box>
                <Box gridColumn={{ base: "span 2", md: "span 2" }}>
                  <label htmlFor="spouse-name">Name of Employer</label>
                  <Input
                    bg="white"
                    id="spouse-name"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                </Box>
                <Box gridColumn={{ base: "span 2", md: "span 2" }}>
                  <label htmlFor="spouse-name">Address of Employer</label>
                  <Input
                    bg="white"
                    id="spouse-name"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                </Box>

                <Box gridColumn={{ base: "span 2", md: "span 4" }}>
                  <label htmlFor="how">Number of Children</label>
                  <Input
                    bg="white"
                    id="spouse-name"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                    mb={5}
                  />
                  <Box
                    maxWidth="100%"
                    width="100%"
                    p={6}
                    bg="gray.50"
                    boxShadow="md"
                    borderRadius="lg"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  >
                    <Stack direction="row" h="50" gap="4">
                      <Box gridColumn={{ base: "span 2", md: "span 3" }} p={2}>
                        <label htmlFor="children-names">Children Name</label>
                        <Input
                          bg="white"
                          id="child1"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          bg="white"
                          id="child2"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          bg="white"
                          id="child3"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          bg="white"
                          id="child4"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          bg="white"
                          id="child5"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                      </Box>
                      <Box gridColumn={{ base: "span 2", md: "span 2" }} p={2}>
                        <label htmlFor="dobchild">Date of Birth</label>
                        <Input
                          bg="white"
                          id="dobchild1"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          bg="white"
                          id="dobchild2"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          bg="white"
                          id="dobchild3"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          bg="white"
                          id="dobchild4"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          bg="white"
                          id="dobchild5"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                      </Box>
                      <Box gridColumn={{ base: "span 1", md: "span 1" }} p={2}>
                        <label htmlFor="child-age">Age</label>
                        <Input
                          bg="white"
                          id="childage1"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          bg="white"
                          id="childage2"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          bg="white"
                          id="childage3"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          bg="white"
                          id="childage4"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          bg="white"
                          id="childage5"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                      </Box>
                    </Stack>
                  </Box>
                </Box>
                <Box gridColumn={{ base: "span 2", md: "span 2" }}>
                  <legend className="font-medium text-lg mb-2">
                    PERSON TO BE CONTACTED IN CASE OF EMERGENCY
                  </legend>
                  <label htmlFor="emergency-name">Name</label>
                  <Input
                    {...register("Emergency_name", {
                      required: "Emergency contact name is required",
                    })}
                    bg="white"
                    id="emergency-name"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                  {errors.Emergency_name && (
                    <p className="text-sm text-red-300">
                      {errors.Emergency_name.message}
                    </p>
                  )}
                </Box>
                <Box colSpan={2} mt={10}>
                  <label htmlFor="relationship-eme">Relationship</label>
                  <Input
                    {...register("Emergency_Rel", {
                      required: "Relationship to emergency contact is required",
                    })}
                    bg="white"
                    id="relationship-eme"
                    type="number"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                  {errors.Emergency_Rel && (
                    <p className="text-sm text-red-300">
                      {errors.Emergency_Rel.message}
                    </p>
                  )}
                </Box>
                <Box colSpan={2} mt={10}>
                  <label htmlFor="children-count">Occupation</label>
                  <Input
                    {...register("Emergency_Occu", {
                      required: "Occupation of emergency contact is required",
                    })}
                    bg="white"
                    id="children-count"
                    type="number"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                  {errors.Emergency_Occu && (
                    <p className="text-sm text-red-300">
                      {errors.Emergency_Occu.message}
                    </p>
                  )}
                </Box>
                <Box gridColumn={{ base: "span 2", md: "span 2" }}>
                  <label htmlFor="emergency-name">Name</label>
                  <Input
                    bg="white"
                    id="emergency-name"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                </Box>
                <Box colSpan={2}>
                  <label htmlFor="emergency-contact">Cellphone #</label>
                  <Input
                    bg="white"
                    id="emergency-contact"
                    type="number"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                </Box>
                <Box colSpan={2}>
                  <label htmlFor="emergency-contact1">Land Line</label>
                  <Input
                    bg="white"
                    id="emergency-contact1"
                    type="number"
                    placeholder="Type here"
                    _focus={{
                      borderColor: "gray.900",
                      outline: "2px solid blue.900",
                      outlineOffset: "1px",
                    }}
                    border="2px solid gray"
                    p={2}
                  />
                </Box>
              </Grid>
            </Box>
          )}

          {/* Educational information */}
          {currentTab === "education" && (
            <Box
              as="fieldset"
              borderWidth="1px"
              borderRadius="md"
              p={5}
              borderColor="gray.200"
            >
              <legend className="font-medium text-lg mb-4">
                EDUCATION AND CERTIFICATION
              </legend>

              <Box mb={6}>
                <legend className="font-medium text-lg mb-2">
                  POST GRADUATE
                </legend>

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
                      <label htmlFor="post-grad-schoolname">
                        Name of School
                      </label>
                      <Input
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
                    </Box>

                    <Box gridColumn="span 2">
                      <label htmlFor="post-grad-loc">Location</label>
                      <Input
                        bg="white"
                        id="post-grad-loc"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                    </Box>

                    <Box gridColumn="span 2">
                      <label htmlFor="post-grad-major">Degree/Major</label>
                      <Input
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
                    </Box>

                    <Box gridColumn="span 1">
                      <label htmlFor="post-grad-from">From Date</label>
                      <Input
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
                    </Box>
                    <Box gridColumn="span 1">
                      <label htmlFor="post-grad-to">To Date</label>
                      <Input
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
                    </Box>

                    <Box gridColumn="span 2">
                      <label htmlFor="post-grad-diploma">
                        Type of Diploma Obtained
                      </label>
                      <Input
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
                    </Box>
                  </Grid>
                </Box>
              </Box>
              <Box mb={6}>
                <legend className="font-medium text-lg mb-2">COLLEGIATE</legend>

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
                      <label htmlFor="college-school">Name of School</label>
                      <Input
                        bg="white"
                        id="college-school"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                    </Box>

                    <Box gridColumn="span 2">
                      <label htmlFor="college-loc">Location</label>
                      <Input
                        bg="white"
                        id="college-loc"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                    </Box>

                    <Box gridColumn="span 2">
                      <label htmlFor="college-major">Degree/Major</label>
                      <Input
                        bg="white"
                        id="college-major"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                    </Box>

                    <Box gridColumn="span 1">
                      <label htmlFor="college-from">From Date</label>
                      <Input
                        bg="white"
                        id="college-from"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                    </Box>
                    <Box gridColumn="span 1">
                      <label htmlFor="college-to">To Date</label>
                      <Input
                        bg="white"
                        id="college-to"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                    </Box>

                    <Box gridColumn="span 2">
                      <label htmlFor="college-diploma">
                        Type of Diploma Obtained
                      </label>
                      <Input
                        bg="white"
                        id="college-diploma"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                    </Box>
                  </Grid>
                </Box>
              </Box>
              <Box mb={6}>
                <legend className="font-medium text-lg mb-2">
                  TRADE SCHOOL OR OTHER VOCATIONAL COURSE
                </legend>

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
                      <label htmlFor="vocational-school">Name of School</label>
                      <Input
                        bg="white"
                        id="vocational-school"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                    </Box>

                    <Box gridColumn="span 2">
                      <label htmlFor="vocational-loc">Location</label>
                      <Input
                        bg="white"
                        id="vocational-loc"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                    </Box>

                    <Box gridColumn="span 2">
                      <label htmlFor="vocational-major">Degree/Major</label>
                      <Input
                        bg="white"
                        id="vocational-major"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                    </Box>

                    <Box gridColumn="span 1">
                      <label htmlFor="vocational-from">From Date</label>
                      <Input
                        bg="white"
                        id="vocational-from"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                    </Box>
                    <Box gridColumn="span 1">
                      <label htmlFor="vocational-to">To Date</label>
                      <Input
                        bg="white"
                        id="vocational-to"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                    </Box>

                    <Box gridColumn="span 2">
                      <label htmlFor="vocational-diploma">
                        Type of Diploma Obtained
                      </label>
                      <Input
                        bg="white"
                        id="vocational-diploma"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                    </Box>
                  </Grid>
                </Box>
              </Box>
              <Box mb={6}>
                <legend className="font-medium text-lg mb-2">SECONDARY</legend>

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
                      <label htmlFor="secondary-school">Name of School</label>
                      <Input
                        bg="white"
                        id="secondary-school"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                    </Box>

                    <Box gridColumn="span 2">
                      <label htmlFor="secondary-loc">Location</label>
                      <Input
                        bg="white"
                        id="secondary-loc"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                    </Box>

                    <Box gridColumn="span 2">
                      <label htmlFor="secondary-major">Degree/Major</label>
                      <Input
                        bg="white"
                        id="secondary-major"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                    </Box>

                    <Box gridColumn="span 1">
                      <label htmlFor="secondary-from">From Date</label>
                      <Input
                        bg="white"
                        id="secondary-from"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                    </Box>
                    <Box gridColumn="span 1">
                      <label htmlFor="secondary-to">To Date</label>
                      <Input
                        bg="white"
                        id="secondary-to"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                    </Box>

                    <Box gridColumn="span 2">
                      <label htmlFor="secondary-diploma">
                        Type of Diploma Obtained
                      </label>
                      <Input
                        bg="white"
                        id="secondary-diploma"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                    </Box>
                  </Grid>
                </Box>
              </Box>
              <Box mb={6}>
                <legend className="font-medium text-lg mb-2">ELEMENTARY</legend>

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
                      <label htmlFor="elementary-school">Name of School</label>
                      <Input
                        bg="white"
                        id="elementary-school"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                    </Box>

                    <Box gridColumn="span 2">
                      <label htmlFor="elementary-loc">Location</label>
                      <Input
                        bg="white"
                        id="elementary-loc"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                    </Box>

                    <Box gridColumn="span 2">
                      <label htmlFor="elementary-major">Degree/Major</label>
                      <Input
                        bg="white"
                        id="elementary-major"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                    </Box>

                    <Box gridColumn="span 1">
                      <label htmlFor="elementary-from">From Date</label>
                      <Input
                        bg="white"
                        id="elementary-from"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                    </Box>
                    <Box gridColumn="span 1">
                      <label htmlFor="elementary-to">To Date</label>
                      <Input
                        bg="white"
                        id="elementary-to"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                    </Box>

                    <Box gridColumn="span 2">
                      <label htmlFor="elementary-diploma">
                        Type of Diploma Obtained
                      </label>
                      <Input
                        bg="white"
                        id="elementary-diploma"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                    </Box>
                  </Grid>
                </Box>
              </Box>
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
                    <label htmlFor="ncee-rate">NCEE Rating</label>
                    <Input
                      bg="white"
                      id="ncee-rate"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>

                  <Box gridColumn="span 2">
                    <label htmlFor="nsat-rate">NSAT Rating</label>
                    <Input
                      bg="white"
                      id="nsat-rate"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>

                  <Box gridColumn="span 2">
                    <label htmlFor="govt-license">Gov't Licensure Exam </label>
                    <Input
                      bg="white"
                      id="govt-license"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>
                  <Box gridColumn="span 2">
                    <label htmlFor="ratings">Ratings </label>
                    <Input
                      bg="white"
                      id="ratings"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>
                  <label htmlFor="driverlicense">
                    Do you have Driver's License?
                  </label>
                  <RadioGroup defaultValue="1">
                    <HStack gap="4">
                      <Radio value="1">Yes</Radio>
                      <Radio value="2">No</Radio>
                    </HStack>
                  </RadioGroup>
                  <Box gridColumn="span 2">
                    <label htmlFor="license-num">
                      Driver's License number{" "}
                    </label>
                    <Input
                      bg="white"
                      id="license-num"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>
                  <Box gridColumn="span 3">
                    <label htmlFor="transpo-means">
                      What is your means of transportation to work?{" "}
                    </label>
                    <Input
                      bg="white"
                      id="transpo-means"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>
                </Grid>
              </Box>
            </Box>
          )}

          {/* Employment History */}
          {currentTab === "employment" && (
            <Box
              as="fieldset"
              borderWidth="1px"
              borderRadius="md"
              p={5}
              borderColor="gray.200"
            >
              <legend className="font-medium text-lg mb-4">
                Employment History
              </legend>
              <legend className="font-medium text-lg mb-4">
                (Please list down beginning your most recent job)
              </legend>

              <Box
                maxWidth="100%"
                width="100%"
                p={6}
                bg="gray.50"
                boxShadow="md"
                borderRadius="lg"
              >
                <legend className="font-medium text-lg mb-2">Employer 1</legend>
                <Grid templateColumns="repeat(4, 1fr)" gap={4}>
                  <Box gridColumn="span 2">
                    <label htmlFor="employer1">Name of Employer</label>
                    <Input
                      bg="white"
                      id="employer1"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>

                  <Box gridColumn="span 2">
                    <label htmlFor="employer1-address">Address</label>
                    <Input
                      bg="white"
                      id="employer1-address"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>

                  <Box gridColumn="span 2">
                    <label htmlFor="employer1-degree">Degree/Major</label>
                    <Input
                      bg="white"
                      id="employer1-degree"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>
                  <Box gridColumn="span 2">
                    <label htmlFor="employer1-diploma">
                      Type of Diploma Obtained
                    </label>
                    <Input
                      bg="white"
                      id="employer1-diploma"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>
                  <Box gridColumn="span 2">
                    <label htmlFor="employer1-position">Position</label>
                    <Input
                      bg="white"
                      id="employer1-position"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>
                  <Box gridColumn="span 2">
                    <label htmlFor="employer1-rate">Payrate:</label>
                    <Input
                      bg="white"
                      id="employer1-rate"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>

                  <Box gridColumn="span 2">
                    <legend className="font-small text-md mt-2 mb-2">
                      Date employed:{" "}
                    </legend>
                    <label htmlFor="employer1-from">From Date:</label>
                    <Input
                      bg="white"
                      id="employer1-from"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>
                  <Box gridColumn="span 2" mt={10}>
                    <label htmlFor="employer1-to">To Date:</label>
                    <Input
                      bg="white"
                      id="employer1-to"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>
                  <Box gridColumn="span 2">
                    <label htmlFor="employer1-phone">Work Phone Number:</label>
                    <Input
                      bg="white"
                      id="employer1-phone"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>
                  <Box gridColumn="span 2">
                    <label htmlFor="employer1-superior-contact">
                      Immediate Superior Contact #:
                    </label>
                    <Input
                      bg="white"
                      id="employer1-superior-contact"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>
                  <Box gridColumn="span 4">
                    <label htmlFor="employer1-function">
                      Job Function & Responsibilities
                    </label>
                    <Input
                      bg="white"
                      id="employer1-function"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>
                  <Box gridColumn="span 3">
                    <label htmlFor="employer1-reason">
                      Reason for Leaving:
                    </label>
                    <Input
                      bg="white"
                      id="employer1-reason"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>
                </Grid>
              </Box>

              <Box
                maxWidth="100%"
                width="100%"
                p={6}
                bg="gray.50"
                boxShadow="md"
                borderRadius="lg"
                mt={5}
              >
                <legend className="font-medium text-lg mb-2">Employer 2</legend>
                <Grid templateColumns="repeat(4, 1fr)" gap={4}>
                  <Box gridColumn="span 2">
                    <label htmlFor="employer2">Name of Employer</label>
                    <Input
                      bg="white"
                      id="employer2"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>

                  <Box gridColumn="span 2">
                    <label htmlFor="employer2-address">Address</label>
                    <Input
                      bg="white"
                      id="employer2-address"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>

                  <Box gridColumn="span 2">
                    <label htmlFor="employer2-major">Degree/Major</label>
                    <Input
                      bg="white"
                      id="employer2-major"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>
                  <Box gridColumn="span 2">
                    <label htmlFor="employer2-diploma">
                      Type of Diploma Obtained
                    </label>
                    <Input
                      bg="white"
                      id="employer2-diploma"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>
                  <Box gridColumn="span 2">
                    <label htmlFor="employer2-position">Position</label>
                    <Input
                      bg="white"
                      id="employer2-position"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>
                  <Box gridColumn="span 2">
                    <label htmlFor="employer2-rate">Payrate:</label>
                    <Input
                      bg="white"
                      id="employer2-rate"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>

                  <Box gridColumn="span 2">
                    <legend className="font-small text-md mt-2 mb-2">
                      Date employed:{" "}
                    </legend>
                    <label htmlFor="employer2-from">From Date:</label>
                    <Input
                      bg="white"
                      id="employer2-from"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>
                  <Box gridColumn="span 2" mt={10}>
                    <label htmlFor="employer2-to">To Date:</label>
                    <Input
                      bg="white"
                      id="employer2-to"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>
                  <Box gridColumn="span 2">
                    <label htmlFor="employer2-phone">Work Phone Number:</label>
                    <Input
                      bg="white"
                      id="employer2-phone"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>
                  <Box gridColumn="span 2">
                    <label htmlFor="employer2-superior">
                      Immediate Superior Contact #:
                    </label>
                    <Input
                      bg="white"
                      id="employer2-superior"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>
                  <Box gridColumn="span 4">
                    <label htmlFor="employer2-function">
                      Job Function & Responsibilities
                    </label>
                    <Input
                      bg="white"
                      id="employer2-function"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>
                  <Box gridColumn="span 3">
                    <label htmlFor="employer2-reason">
                      Reason for Leaving:
                    </label>
                    <Input
                      bg="white"
                      id="employer2-reason"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>
                </Grid>
              </Box>

              <Box
                maxWidth="100%"
                width="100%"
                p={6}
                bg="gray.50"
                boxShadow="md"
                borderRadius="lg"
                mt={5}
              >
                <legend className="font-medium text-lg mb-2">Employer 3</legend>
                <Grid templateColumns="repeat(4, 1fr)" gap={4}>
                  <Box gridColumn="span 2">
                    <label htmlFor="employer3">Name of Employer</label>
                    <Input
                      bg="white"
                      id="employer3"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>

                  <Box gridColumn="span 2">
                    <label htmlFor="employer3-address">Address</label>
                    <Input
                      bg="white"
                      id="employer3-address"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>

                  <Box gridColumn="span 2">
                    <label htmlFor="employer3-degree">Degree/Major</label>
                    <Input
                      bg="white"
                      id="employer3-degree"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>
                  <Box gridColumn="span 2">
                    <label htmlFor="employer3-diploma">
                      Type of Diploma Obtained
                    </label>
                    <Input
                      bg="white"
                      id="employer3-diploma"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>
                  <Box gridColumn="span 2">
                    <label htmlFor="employer3-position">Position</label>
                    <Input
                      bg="white"
                      id="employer3-position"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>
                  <Box gridColumn="span 2">
                    <label htmlFor="employer3-rate">Payrate:</label>
                    <Input
                      bg="white"
                      id="employer3-rate"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>

                  <Box gridColumn="span 2">
                    <legend className="font-small text-md mt-2 mb-2">
                      Date employed:{" "}
                    </legend>
                    <label htmlFor="employer3-from">From Date:</label>
                    <Input
                      bg="white"
                      id="employer3-from"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>
                  <Box gridColumn="span 2" mt={10}>
                    <label htmlFor="employer3-to">To Date:</label>
                    <Input
                      bg="white"
                      id="employer3-to"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>
                  <Box gridColumn="span 2">
                    <label htmlFor="employer3-phone">Work Phone Number:</label>
                    <Input
                      bg="white"
                      id="employer3-phone"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>
                  <Box gridColumn="span 2">
                    <label htmlFor="employer3-superior">
                      Immediate Superior Contact #:
                    </label>
                    <Input
                      bg="white"
                      id="employer3-superior"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>
                  <Box gridColumn="span 4">
                    <label htmlFor="employer3-function">
                      Job Function & Responsibilities
                    </label>
                    <Input
                      bg="white"
                      id="employer3-function"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>
                  <Box gridColumn="span 3">
                    <label htmlFor="employer3-reason">
                      Reason for Leaving:
                    </label>
                    <Input
                      bg="white"
                      id="employer3-reason"
                      placeholder="Type here"
                      _focus={{
                        borderColor: "gray.900",
                        outline: "2px solid blue.900",
                        outlineOffset: "1px",
                      }}
                      border="2px solid gray"
                      p={2}
                    />
                  </Box>
                </Grid>
              </Box>
            </Box>
          )}
          {/* Employment Info end */}

          {/* Training & Seminar/Course */}
          {currentTab === "training/course" && (
            <Box
              as="fieldset"
              borderWidth="1px"
              borderRadius="md"
              p={5}
              borderColor="gray.200"
            >
              <legend className="font-medium text-lg mb-4">
                TRAINING & SEMINAR/COURSE ATTENDED
              </legend>
              <Grid templateColumns="repeat(4, 1fr)" gap={3}>
                <Box gridColumn={{ base: "span 2", md: "span 4" }}>
                  <label htmlFor="training-course-name">
                    Title of Seminar/Course:
                  </label>
                  <Box
                    maxWidth="100%"
                    width="100%"
                    p={6}
                    bg="gray.50"
                    boxShadow="md"
                    borderRadius="lg"
                    border="3px solid gray"
                  >
                    <Stack direction="row" h="50" gap="4">
                      <Box gridColumn={{ base: "span 2", md: "span 3" }}>
                        <label htmlFor="seminar-names">Seminars:</label>
                        <Input
                          bg="white"
                          id="seminar1"
                          placeholder="1"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          bg="white"
                          id="seminar2"
                          placeholder="2"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          bg="white"
                          id="seminar3"
                          placeholder="3"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          bg="white"
                          id="seminar4"
                          placeholder="4"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          bg="white"
                          id="seminar5"
                          placeholder="5"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                      </Box>
                      <Box gridColumn={{ base: "span 2", md: "span 2" }}>
                        <label htmlFor="seminar-address">Place/Address</label>
                        <Input
                          bg="white"
                          id="seminar-address1"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          bg="white"
                          id="seminar-address2"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          bg="white"
                          id="seminar-address3"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          bg="white"
                          id="seminar-address4"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          bg="white"
                          id="seminar-address5"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                      </Box>
                      <Box gridColumn={{ base: "span 1", md: "span 1" }}>
                        <label htmlFor="seminar-from">From</label>
                        <Input
                          bg="white"
                          id="childage1"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          bg="white"
                          id="childage2"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          bg="white"
                          id="childage3"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          bg="white"
                          id="childage4"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          bg="white"
                          id="childage5"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                      </Box>
                      <Box gridColumn={{ base: "span 1", md: "span 1" }}>
                        <label htmlFor="child-age">To</label>
                        <Input
                          bg="white"
                          id="childage1"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          bg="white"
                          id="childage2"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          bg="white"
                          id="childage3"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          bg="white"
                          id="childage4"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          bg="white"
                          id="childage5"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                      </Box>
                    </Stack>
                  </Box>
                </Box>
              </Grid>
            </Box>
          )}
          {/* Training & Seminar/end */}
          {/* organizations */}
          {currentTab === "organizations" && (
            <Box
              as="fieldset"
              borderWidth="1px"
              borderRadius="md"
              p={5}
              borderColor="gray.200"
            >
              <legend className="font-medium text-lg mb-4">
                ORGANIZATIONS/ASSOCIATIONS/FRATERNITIES YOU HAVE JOINED
              </legend>
              <Grid templateColumns="repeat(4, 1fr)" gap={3}>
                <Box gridColumn={{ base: "span 2", md: "span 4" }}>
                  <label htmlFor="children-names">
                    Name of Organizations/Associations/Fraternities:
                  </label>
                  <Box
                    maxWidth="100%"
                    width="100%"
                    p={6}
                    bg="gray.50"
                    boxShadow="md"
                    borderRadius="lg"
                    border="3px solid gray"
                  >
                    <Stack direction="row" h="50" gap="4">
                      <Box gridColumn={{ base: "span 2", md: "span 3" }}>
                        <label htmlFor="organizations-names">
                          Organizations:
                        </label>
                        <Input
                          bg="white"
                          id="organizations1"
                          placeholder="1"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          bg="white"
                          id="organizations2"
                          placeholder="2"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          bg="white"
                          id="organizations3"
                          placeholder="3"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          bg="white"
                          id="organizations4"
                          placeholder="4"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          bg="white"
                          id="organizations5"
                          placeholder="5"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                      </Box>
                      <Box gridColumn={{ base: "span 2", md: "span 2" }}>
                        <label htmlFor="seminar-address">Place/Address</label>
                        <Input
                          bg="white"
                          id="seminar-address1"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          bg="white"
                          id="seminar-address2"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          bg="white"
                          id="seminar-address3"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          bg="white"
                          id="seminar-address4"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          bg="white"
                          id="seminar-address5"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                      </Box>
                      <Box gridColumn={{ base: "span 1", md: "span 1" }}>
                        <label htmlFor="seminar-from">From</label>
                        <Input
                          bg="white"
                          id="seminar-from1"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          bg="white"
                          id="seminar-from2"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          bg="white"
                          id="seminar-from3"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          bg="white"
                          id="seminar-from4"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          bg="white"
                          id="seminar-from5"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                      </Box>
                      <Box gridColumn={{ base: "span 1", md: "span 1" }}>
                        <label htmlFor="seminar-to">To</label>
                        <Input
                          bg="white"
                          id="seminar-to1"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          bg="white"
                          id="seminar-to2"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          bg="white"
                          id="seminar-to3"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          bg="white"
                          id="seminar-to4"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                        <Input
                          bg="white"
                          id="seminar-to5"
                          placeholder="Type here"
                          _focus={{
                            borderColor: "gray.900",
                            outline: "2px solid blue.900",
                            outlineOffset: "1px",
                          }}
                          border="2px solid gray"
                          p={2}
                          mb={2}
                        />
                      </Box>
                    </Stack>
                  </Box>
                </Box>
              </Grid>
            </Box>
          )}
          {/* organizations-end */}

          {/* references */}
          {currentTab === "references" && (
            <Box
              as="fieldset"
              borderWidth="1px"
              borderRadius="md"
              p={5}
              borderColor="gray.200"
            >
              {/* referral 1 */}
              <Box mb={6}>
                <legend className="font-medium text-lg mb-2">Referral 1</legend>

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
                      <label htmlFor="referral1">Name:</label>
                      <Input
                        bg="white"
                        id="referral1"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                    </Box>

                    <Box gridColumn="span 2">
                      <label htmlFor="referral1-address">Address</label>
                      <Input
                        bg="white"
                        id="referral1-address"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                    </Box>

                    <Box gridColumn="span 1">
                      <label htmlFor="referral1-cell">Cellphone #:</label>
                      <Input
                        bg="white"
                        id="referral1-cell"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                    </Box>
                    <Box gridColumn="span 1">
                      <label htmlFor="referral1-landline">Landline #:</label>
                      <Input
                        bg="white"
                        id="referral1-landline"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                    </Box>

                    <Box gridColumn="span 2">
                      <label htmlFor="referral1-relationship">
                        Relationship to Applicant
                      </label>
                      <Input
                        bg="white"
                        id="referral1-relationship"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                    </Box>
                    <Box gridColumn="span 2">
                      <label htmlFor="referral1-occupation">Occupation</label>
                      <Input
                        bg="white"
                        id="referral1-occupation"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                    </Box>
                  </Grid>
                </Box>
              </Box>
              {/* Referral 2 */}
              <Box mb={6}>
                <legend className="font-medium text-lg mb-2">Referral 2</legend>

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
                      <label htmlFor="referral2">Name:</label>
                      <Input
                        bg="white"
                        id="referral2"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                    </Box>

                    <Box gridColumn="span 2">
                      <label htmlFor="referral2-address">Address</label>
                      <Input
                        bg="white"
                        id="referral2-address"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                    </Box>

                    <Box gridColumn="span 1">
                      <label htmlFor="referral2-cell">Cellphone #:</label>
                      <Input
                        bg="white"
                        id="referral2-cell"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                    </Box>
                    <Box gridColumn="span 1">
                      <label htmlFor="referral2-landline">Landline #:</label>
                      <Input
                        bg="white"
                        id="referral2-landline"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                    </Box>

                    <Box gridColumn="span 2">
                      <label htmlFor="referral2-relationship">
                        Relationship to Applicant
                      </label>
                      <Input
                        bg="white"
                        id="referral2-relationship"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                    </Box>
                    <Box gridColumn="span 2">
                      <label htmlFor="referral2-occupation">Occupation</label>
                      <Input
                        bg="white"
                        id="referral2-occupation"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                    </Box>
                  </Grid>
                </Box>
              </Box>
              {/* Referral 3 */}
              <Box mb={6}>
                <legend className="font-medium text-lg mb-2">Referral 3</legend>

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
                      <label htmlFor="referral3">Name:</label>
                      <Input
                        bg="white"
                        id="referral3"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                    </Box>

                    <Box gridColumn="span 2">
                      <label htmlFor="referral3-address">Address</label>
                      <Input
                        bg="white"
                        id="referral3-address"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                    </Box>

                    <Box gridColumn="span 1">
                      <label htmlFor="referral3-cell">Cellphone #:</label>
                      <Input
                        bg="white"
                        id="referral3-cell"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                    </Box>
                    <Box gridColumn="span 1">
                      <label htmlFor="referral3-landline">Landline #:</label>
                      <Input
                        bg="white"
                        id="referral3-landline"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                    </Box>

                    <Box gridColumn="span 2">
                      <label htmlFor="referral3-relationship">
                        Relationship to Applicant
                      </label>
                      <Input
                        bg="white"
                        id="referral3-relationship"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                    </Box>
                    <Box gridColumn="span 2">
                      <label htmlFor="referral3-occupation">Occupation</label>
                      <Input
                        bg="white"
                        id="referral3-occupation"
                        placeholder="Type here"
                        _focus={{
                          borderColor: "gray.900",
                          outline: "2px solid blue.900",
                          outlineOffset: "1px",
                        }}
                        border="2px solid gray"
                        p={2}
                      />
                    </Box>
                  </Grid>
                </Box>
              </Box>
            </Box>
          )}
          {/* references-end */}
          {/* location */}
          {currentTab === "location" && (
            <Box
              as="fieldset"
              borderWidth="1px"
              borderRadius="md"
              p={5}
              borderColor="gray.200"
            >
              <legend className="font-medium text-lg mb-4">
                Location of your house (Maps)
              </legend>
              <AspectRatio ratio={21 / 9}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3865.7759069004946!2d121.06321238031265!3d14.324445450366555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d766022cfe23%3A0x3af2baafc5abe94c!2sReliance%20Producers%20Cooperative!5e0!3m2!1sen!2sng!4v1732463432909!5m2!1sen!2sng" />
              </AspectRatio>
              <Box
                as="fieldset"
                borderWidth="1px"
                borderRadius="md"
                p={5}
                borderColor="gray.200"
                mt={8}
              >
                <legend className="font-medium text-lg mb-4">
                  Relative Referral
                </legend>
                <Grid templateColumns="repeat(4, 1fr)" gap={3}>
                  <Box gridColumn={{ base: "span 2", md: "span 4" }}>
                    <Box
                      maxWidth="100%"
                      width="100%"
                      p={6}
                      bg="gray.50"
                      boxShadow="md"
                      borderRadius="lg"
                    >
                      <Stack direction="row" h="50" gap="4">
                        <Box gridColumn={{ base: "span 2", md: "span 3" }}>
                          <label htmlFor="referral-relative-name">Name</label>
                          <Input
                            bg="white"
                            id="referral-relative-name1"
                            placeholder="Type here"
                            _focus={{
                              borderColor: "gray.900",
                              outline: "2px solid blue.900",
                              outlineOffset: "1px",
                            }}
                            border="2px solid gray"
                            p={2}
                            mb={2}
                          />
                          <Input
                            bg="white"
                            id="referral-relative-name2"
                            placeholder="Type here"
                            _focus={{
                              borderColor: "gray.900",
                              outline: "2px solid blue.900",
                              outlineOffset: "1px",
                            }}
                            border="2px solid gray"
                            p={2}
                            mb={2}
                          />
                          <Input
                            bg="white"
                            id="referral-relative-name3"
                            placeholder="Type here"
                            _focus={{
                              borderColor: "gray.900",
                              outline: "2px solid blue.900",
                              outlineOffset: "1px",
                            }}
                            border="2px solid gray"
                            p={2}
                            mb={2}
                          />
                        </Box>
                        <Box gridColumn={{ base: "span 2", md: "span 2" }}>
                          <label htmlFor="referral-relative-address">
                            Address
                          </label>
                          <Input
                            bg="white"
                            id="referral-relative-address1"
                            placeholder="Type here"
                            _focus={{
                              borderColor: "gray.900",
                              outline: "2px solid blue.900",
                              outlineOffset: "1px",
                            }}
                            border="2px solid gray"
                            p={2}
                            mb={2}
                          />
                          <Input
                            bg="white"
                            id="referral-relative-address2"
                            placeholder="Type here"
                            _focus={{
                              borderColor: "gray.900",
                              outline: "2px solid blue.900",
                              outlineOffset: "1px",
                            }}
                            border="2px solid gray"
                            p={2}
                            mb={2}
                          />
                          <Input
                            bg="white"
                            id="referral-relative-address3"
                            placeholder="Type here"
                            _focus={{
                              borderColor: "gray.900",
                              outline: "2px solid blue.900",
                              outlineOffset: "1px",
                            }}
                            border="2px solid gray"
                            p={2}
                            mb={2}
                          />
                        </Box>
                        <Box gridColumn={{ base: "span 1", md: "span 1" }}>
                          <label htmlFor="referral-relative-contact">
                            Occupation
                          </label>
                          <Input
                            bg="white"
                            id="referral-relative-contact1"
                            placeholder="Type here"
                            _focus={{
                              borderColor: "gray.900",
                              outline: "2px solid blue.900",
                              outlineOffset: "1px",
                            }}
                            border="2px solid gray"
                            p={2}
                            mb={2}
                          />
                          <Input
                            bg="white"
                            id="referral-relative-contact2"
                            placeholder="Type here"
                            _focus={{
                              borderColor: "gray.900",
                              outline: "2px solid blue.900",
                              outlineOffset: "1px",
                            }}
                            border="2px solid gray"
                            p={2}
                            mb={2}
                          />
                          <Input
                            bg="white"
                            id="referral-relative-contact3"
                            placeholder="Type here"
                            _focus={{
                              borderColor: "gray.900",
                              outline: "2px solid blue.900",
                              outlineOffset: "1px",
                            }}
                            border="2px solid gray"
                            p={2}
                            mb={2}
                          />
                        </Box>
                      </Stack>
                    </Box>
                  </Box>
                </Grid>
              </Box>
            </Box>
          )}
          {/* location-end */}
          {/* Form Buttons */}
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mt={6}
          >
            <Button
              size="md"
              variant="outline"
              colorScheme="blue"
              onClick={handleBack}
              isDisabled={tabOrder.indexOf(currentTab) === 0}
            >
              Back
            </Button>
            <Button
              p="6"
              colorScheme="none"
              bg="#0B1E33"
              color="white"
              overflow="hidden"
              onClick={handleNext}
              isDisabled={tabOrder.indexOf(currentTab) === tabOrder.length - 1}
            >
              Next
            </Button>
          </Box>
        </Box>
      </GridItem>
    </Grid>
  );
};

export default Form;
