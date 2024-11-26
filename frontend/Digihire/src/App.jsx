import React from "react";
import Header from "./pages/Header";
import Firstsec from "./pages/Firstsec";
import Footer from "./pages/Footer";
import How from "./pages/How";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Sign from "./pages/Sign";
import Hrdash from "./pages/Hrdash";
import ProtectedRoute from "./pages/ProtectedRoute";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/sign" element={<Sign />} />
          <Route
            path="/dashboard/:email"
            element={
              <ProtectedRoute>
                <Hrdash />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/:email/:tab"
            element={
              <ProtectedRoute>
                <Hrdash />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
