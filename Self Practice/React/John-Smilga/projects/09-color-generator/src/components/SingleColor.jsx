import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";
import { FaCopy } from "react-icons/fa";

function SingleColor({ rgb, weight, index, hexColor }) {
  const [alert, setAlert] = useState(false);
  const bgc = rgb.join(",");
  /*const hex = rgbToHex(...rgb);
  // array of red, green and blue is split up into 3 different values
    or you can make use of the provided hex from the library 
  */
  const hexCode = `#${hexColor}`;

  const handleCopy = () => {
    setAlert(true);
    navigator.clipboard.writeText(hexCode); //javascript method
  };
  // remove alert after 3 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => clearTimeout(timeout); // before the next render clear this initial timeout
  }, [alert]);

  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgba(${bgc})` }}
      onClick={handleCopy}>
      <p className="percent-value">{weight}%</p>
      <p className="color-value">
        {hexCode} <FaCopy className="copy-icon" />
      </p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
}
export default SingleColor;
