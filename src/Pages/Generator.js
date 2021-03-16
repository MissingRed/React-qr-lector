import React, { useState } from "react";

const Generator = () => {
  const [qr, setQr] = useState("Prueba");

  const handleChange = (event) => {
    setQr(event.target.value);
  };

  const downloadQR = () => {
    const canvas = document.getElementById("myqr");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "myqr.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  return <div></div>;
};

export default Generator;
