import React, { useEffect, useState } from "react";
import { Box, Grid } from "@chakra-ui/react";
import { IoIosArrowDown } from "react-icons/io";
import "./page.css";

const Popularvacancies = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJob();
  }, []);

  const fetchJob = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/log_hr/jobPost");
      const data = await response.json();
      setJobs(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Box>
        <Grid gridTemplateColumns="repeat(12, 1fr)" gap={4}>
          <Box gridColumn="3 / span 7">
            <h2 className="overflow-hidden p-2 text-3xl font-semibold">
              Most Popular Vacancies
            </h2>
          </Box>
        </Grid>
        <Grid
          gridTemplateColumns="repeat(12, 1fr)"
          className="p-3 h-full"
          gap={4}
        >
          {jobs.map((job, index) => {
            const span = 2; // Customize the span for each job card
            const colStart = 3 + (index % (10 / span)) * span; // Start at column 3

            return (
              <Box
                gridColumn={`${colStart} / span ${span}`}
                className="shadow2 p-2"
                key={index}
              >
                <div className="flex">
                  <div>
                    <h3 className="text-sm font-semibold">{job.JobTitle}</h3>
                    <span className="text-gray-400 text-xs">
                      {job.neededApplicant} open position
                    </span>
                  </div>
                  <div className="p-2 ml-auto flex items-center">
                    <IoIosArrowDown size={20} />
                  </div>
                </div>
              </Box>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default Popularvacancies;
