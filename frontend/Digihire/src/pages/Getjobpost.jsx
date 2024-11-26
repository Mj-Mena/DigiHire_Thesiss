import React from "react";
import { useEffect, useState } from "react";
import { Box, Input, Button, Grid, Center } from "@chakra-ui/react";

const Getjobpost = () => {
  const [jobs, setJobs] = useState([]); // Corrected the state name

  useEffect(() => {
    fetchJob(); // Fetch jobs when the component mounts
  }, []); // Empty dependency array ensures this runs only once on mount

  const fetchJob = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/log_hr/jobPost");
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
        className="font-medium text-lg mb-4 text-center"
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
          className="font-medium text-lg mb-4 text-center"
        >
          <span>{job.JobTitle}</span>
          <span>{job.status}</span>
          <span>{job.neededApplicant}</span>
          <span>Applications</span>
          <button>View Candidates</button>
        </Grid>
      ))}
    </>
  );
};

export default Getjobpost;
