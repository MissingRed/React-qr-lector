import React from "react";
import { Link } from "react-router-dom";
import { mdiQrcode, mdiQrcodeScan } from "@mdi/js";

const Home = () => {
  return (
    <div>
      <h1>Generador QR</h1>
      <button path={mdiQrcode}> Generar QR</button>
      <button path={mdiQrcodeScan}> Scannear QR</button>
    </div>
  );
};

export default Home;
