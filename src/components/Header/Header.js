import React from "react";

const HeaderStyles = {
  fontFamily: "'Permanent Marker', cursive",
  padding: "10px 20px",
  textAlign: "center",
  color: "black",
  fontSize: "22px",
};

export default function Header() {
  return (
    <div
      style={{
        borderBottom: "1px solid var(--mainBlue)",
        marginBottom: "10px",
      }}
    >
      <h2 style={HeaderStyles}>To Do List</h2>
    </div>
  );
}
