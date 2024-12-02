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
import Form from "./pages/Form";
import PasswordResetRequest from "./pages/PasswordResetRequest";
import PasswordResetConfirm from "./pages/PasswordResetConfirm";
import Upload from "./pages/Upload";
import Camera from "./pages/Camera";
import Error from "./pages/Error";
import Confirmation from "./pages/Confirmation";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/upload" element={<Upload />} />
          <Route path="/camera/:job" element={<Camera />} />
          <Route path="/error" element={<Error />} />
          <Route path="/success" element={<Confirmation />} />

          <Route path="/" element={<Landing />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/Form" element={<Form />} />
          <Route
            path="password-reset/:token"
            element={<PasswordResetConfirm />}
          />
          <Route
            path="/request/password_reset"
            element={<PasswordResetRequest />}
          />
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
