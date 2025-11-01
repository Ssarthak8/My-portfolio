import React from "react";
import { NavLink } from "react-router-dom";
import profileImg from "../assets/pf.png"; // ✅ Correct import

function Sidebar() {
  return (
    <div
      style={{
        width: "250px",
        height: "100vh",
        backgroundColor: "#0d1117",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px 10px",
        position: "fixed",
        left: 0,
        top: 0,
        boxShadow: "2px 0 10px rgba(0,0,0,0.3)",
      }}
    >
      {/* Profile Info */}
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <img
          src={profileImg} // ✅ Fixed image reference
          alt="Profile"
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            border: "3px solid #1e90ff",
            marginBottom: "10px",
            objectFit: "cover",
          }}
        />
        <h2 style={{ margin: "5px 0", color: "#1e90ff" }}>Sarthak Ghatol</h2>
        <p style={{ fontSize: "14px", margin: "5px 0" }}>📞Phone no. +91-9822039861</p>
        <p style={{ fontSize: "14px", margin: "5px 0" }}>🎂DOB- 08 December 2005</p>
        <p style={{ fontSize: "14px", margin: "5px 0" }}>🩸Blood group- B+</p>
        <p style={{ fontSize: "14px", margin: "5px 0" }}>🏠 Address:</p>
        <p style={{ fontSize: "13px", color: "#ccc" }}>
          Pimpri Chinchwad University, Pune
        </p>
      </div>

      {/* Navigation Links */}
      <nav style={{ width: "100%" }}>
        {[
          { name: "About", path: "/" },
          { name: "Education", path: "/education" },
          { name: "Hobbies", path: "/hobbies" },
          { name: "Certificates", path: "/certificates" },
          { name: "Social", path: "/social" },
        ].map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            style={({ isActive }) => ({
              display: "block",
              padding: "12px 20px",
              margin: "8px 0",
              borderRadius: "10px",
              textDecoration: "none",
              color: isActive ? "#0d1117" : "#fff",
              backgroundColor: isActive ? "#1e90ff" : "transparent",
              textAlign: "center",
              transition: "0.3s",
            })}
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;
