import React from "react";
import { useEffect, useState } from "react";
import { Box, Input, Button, Grid, Center } from "@chakra-ui/react";
import "./page.css";
const Getjobpost = () => {
  const [jobs, setJobs] = useState([]); // Corrected the state name

  useEffect(() => {
    fetchJob(); // Fetch jobs when the component mounts
  }, []); // Empty dependency array ensures this runs only once on mount

  const fetchJob = async () => {
    try {
      const response = await fetch("https://127.0.0.1:8000/log_hr/jobPost");
      const data = await response.json();
      setJobs(data); // Store the fetched jobs in state
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
        <span>Jobs</span>
        <span>Status</span>
        <span>Slots</span>
        <span>Applications</span>
        <span>Action</span>
      </Grid>

      {jobs.map((job, index) => (
        <Grid
          key={index} // Add a unique key for each element
          gap={4}
          gridTemplateColumns="repeat(5,1fr)"
          className="font-medium text-sm mb-4 text-center"
        >
          <span className="align-middle">{job.JobTitle}</span>
          <span className="align-middle">{job.status}</span>
          <span className="align-middle">{job.neededApplicant}</span>
          <span className="align-middle">Applications</span>
          <Button className=" bg-Black-Pearl br text-white">
            view candidates
          </Button>
        </Grid>
      ))}
    </>
  );
};

export default Getjobpost;
