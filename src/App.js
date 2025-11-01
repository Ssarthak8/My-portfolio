import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Education from "./components/Education";
import Hobbies from "./components/Hobbies";
import Certificates from "./components/Certificates";
import Social from "./components/Social";

function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div
          style={{
            marginLeft: "250px",
            padding: "30px",
            width: "100%",
            backgroundColor: "#161b22",
            minHeight: "100vh",
            color: "white",
          }}
        >
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/hobbies" element={<Hobbies />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/social" element={<Social />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
