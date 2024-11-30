import React from "react";
import "./page.css";
import Camera from "./Camera";
import UploadResume from "./Uploadresume";
import Header from "./Header";
import Footer from "./Footer";
const Upload = () => {
  const back = () => {
    window.location = "http://localhost:5173/";
  };
  return (
    <>
    <Header/>
      <UploadResume />
      <Footer/>
    </>
  );
};

export default Upload;
