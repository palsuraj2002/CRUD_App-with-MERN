import React from "react";

const Footer = () => {
  return (
    <>
      <footer
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          backgroundColor: "#f8f9fa", 
          boxShadow: "0 -2px 5px rgba(0, 0, 0, 0.05)", 
          zIndex: 1000,
        }}
      >
        <div
          className="container-fluid p-3 text-center"
          style={{
            paddingTop: "1rem",
            paddingBottom: "1rem",
            color: "#6c755a", 
            fontWeight: "400",
            fontFamily: "monospace",
          }}
        >
          &copy; 2025 CRUD_APP by SURAJ - All Rights Reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
