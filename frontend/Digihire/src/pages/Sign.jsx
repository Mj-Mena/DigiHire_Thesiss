import React from "react";
import "./page.css";
import Log from "./Log";
const Sign = () => {
  const back = () => {
    window.location = "http://localhost:5173/";
  };
  return (
    <>
      <Log />
    </>
  );
};

export default Sign;
