import React from "react";

export default function Footer() {
  const currYear = new Date().getFullYear()
  return (
    <footer className="px-3 py-2 bg-white">
      <h4 className="">Team Member Allocation App &copy; {currYear}</h4>
    </footer>
  )
}