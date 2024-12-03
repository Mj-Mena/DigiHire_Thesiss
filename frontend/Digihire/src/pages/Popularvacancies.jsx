import React, { useEffect, useState } from "react";
import { Box, Button, Grid } from "@chakra-ui/react";
import { IoIosArrowDown } from "react-icons/io";
import "./page.css";
import { useNavigate } from "react-router-dom";

const Popularvacancies = () => {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchJob();
  }, []);
  const showbox = (jobTitle) => {
    console.log("Clicked Job Title:", jobTitle);
    navigate(`/camera/${jobTitle}`);
    localStorage.setItem("jobtitle", jobTitle);
  };
  const fetchJob = async () => {
    try {
      const response = await fetch("https://127.0.0.1:8000/log_hr/jobPost");
      const data = await response.json();
      setJobs(data);
    } catch (error) {
      console.log(error);
    }
  };
  const truncateWords = (text, limit) => {
    if (!text) return ""; // Handle empty or undefined text
    const words = text.split(" ");
    return words.length > limit
      ? words.slice(0, limit).join(" ") + "..." // Add ellipsis if truncated
      : text;
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
            const span = 3; // Customize the span for each job card
            const colStart = 3 + (index % (10 / span)) * span; // Start at column 3

            return (
              <Box
                gridColumn={`${colStart} / span ${span}`}
                className="shadow2 p-2 flex flex-col"
                key={index}
                style={{ minHeight: "250px" }} // Minimum height to keep consistent layout
              >
                <div className="p-3 flex gap-4">
                  <div>Logo</div>
                  <div className="flex flex-col">
                    <div className="text-xs text-gray-400">
                      {job.employmentTime}
                    </div>
                    <div className="text-lg font-semibold text-Black-Pearl">
                      {job.JobTitle}
                    </div>
                  </div>
                </div>

                {/* Truncated job description */}
                <div className="text-sm px-3 flex-grow">
                  {truncateWords(job.jobdescription, 40)}
                </div>

                {/* Location and button container */}
                <div className="flex justify-between mt-auto p-2">
                  <div className="text-sm self-center mt-1">{job.location}</div>
                  <Button
                    onClick={() => {
                      showbox(job.JobTitle);
                    }}
                    className="bg-Black-Pearl text-white p-2 br text-xs mt-1"
                  >
                    Apply now
                  </Button>
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
