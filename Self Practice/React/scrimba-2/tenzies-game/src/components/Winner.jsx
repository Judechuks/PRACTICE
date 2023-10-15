import React, { useState } from "react";

export default function Winner() {
  const [hide, setHide] = useState(false)

  let styles = {
    backgroundColor: "transparent",
    width: "100%",
    height: "100%",
    fontSize: "2.5rem",
    borderRadius: "5px",
    display: hide ? "none" : "flex",
    placeContent: "center",
    alignItems: "center",
    position: "absolute",
    cursor: "pointer"
  }
  let msg = {
    backgroundColor: "#fff",
    width: "50%",
    height: "fit-content",
    textAlign: "center",
    padding: "2rem .5rem",
    boxShadow: "0 0 15px 2px black",
    borderRadius: "5px"
  }

  return (
    <div style={styles} onClick={() => setHide(true)}>
      <h2 style={msg}>Hurray!!! You Won!</h2>
    </div>
  )
}