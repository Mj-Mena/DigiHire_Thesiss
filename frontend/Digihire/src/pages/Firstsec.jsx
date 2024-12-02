import React, { useState } from "react";
import "./page.css";
import land from "../assets/land.png";
import person from "../assets/1.png";
import search from "../assets/2.png";
import check from "../assets/check.png";
const Firstsec = () => {
  var start = 2;
  const [count, setcount] = useState(0);
  const stats = [
    { label: "Employee Population", value: "1,000+" },
    { label: "Candidates", value: "500+" },
    { label: "Job Vacancies", value: "260" },
  ];
  const Icons = [search, person, search];
  const handleclick = () => {
    window.location = "http://localhost:5173/upload";
  };
  const back = () => {
    window.location = "http://localhost:5173/";
  };
  return (
    <>
      <div className="wfull-h100 gray pt pb-20">
        <div className="second-div">
          <div className="wrap-f-stack grid h100">
            <div className=" grid gap-2 w-full h-full">
              <h2 className=" headertext font-semibold text-Black-Pearl p-2 ">
                Start a career at RPC
              </h2>
              <p className=" text-sm pt-3 para text-gray-500 font-medium">
                Reliance Producers Cooperative is the first PEZA-registered
                cooperative authorized to engage in garment manufacturing and
                export.
              </p>
              <button
                className="text-white text-sm br ml-2 
               bg-blue-light p-3 w-3/4 self-center"
                onClick={handleclick}
              >
                Apply Now
              </button>
              <p className=" text-sm mt-4 para text-gray-500">
                Suggested: Inline Presser, Log Helper,{" "}
                <span className=" text-blue-light">Sewers</span>
              </p>
            </div>
          </div>
          <div className=" pic">
            <img src={land} />
          </div>
        </div>

        <div className="stats mt-10 grid-temp gap-4 w-screen h-full">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`grid br val bg-white`}
              style={{ gridColumnStart: (index % 3) * 3 + 3 }}
            >
              <div className="dcont flex gap-3 p-4">
                <div className="data max-sm: imgcol">
                  <img src={Icons[index]} width={70} />
                </div>
                <div className=" align-middle self-center">
                  <div className=" text-base font-semibold">{stat.value}</div>
                  <div className="w-full text-xs align-middle text-gray-500">
                    {stat.label}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Firstsec;
