import React from "react";
import { useEffect, useState } from "react";
import { Box, Input, Button, Grid, Center } from "@chakra-ui/react";
import "./page.css";
const Candidates = () => {
  const [applicant, setApplicant] = useState([]); // Corrected the state name

  useEffect(() => {
    fetchapplicant(); // Fetch jobs when the component mounts
  }, []); // Empty dependency array ensures this runs only once on mount

  const fetchapplicant = async () => {
    try {
      const response = await fetch(
        "https://192.168.254.112:8000/log_hr/getCandidates"
      );
      const data = await response.json();
      setApplicant(data); // Store the fetched jobs in state
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Grid
        gap={4}
        gridTemplateColumns="repeat(5,1fr)"
        className="font-medium text-base py-2 mb-4 text-center bg-Black-Pearl text-white "
      >
        <span>Name</span>
        <span>Percentage</span>
        <span className="col-span-2">Action</span>
        <span>Summary</span>
      </Grid>

      {applicant.map((apply, index) => (
        <Grid
          key={index} // Add a unique key for each element
          gap={4}
          gridTemplateColumns="repeat(5,1fr)"
          className="font-medium text-sm mb-4 text-center"
        >
          <span className="align-middle">{apply.fullname}</span>
          <span className="align-middle">walapa</span>
          <Button className="align-middle text-white br bg-green-but">
            Hire
          </Button>
          <Button className="align-middle text-white br bg-red-but">
            Reject
          </Button>
          <Button className=" bg-Black-Pearl br text-white">
            view candidates
          </Button>
        </Grid>
      ))}
    </>
  );
};

export default Candidates;
