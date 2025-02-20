import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./components/LoginScreen";
import UploadScreen from "./components/UploadScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/upload" element={<UploadScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
