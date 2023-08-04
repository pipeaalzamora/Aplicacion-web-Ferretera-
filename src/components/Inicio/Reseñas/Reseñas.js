import React, { useState } from "react";
import "./Reseñas.css";
import logotrupper from "../Reseñas/logotrupper.png"

export default function Empresas () {
  const [hover, setHover] =  useState(false);
 return (
    <div className="logoss">
      <img src={logotrupper} alt="Error" className={hover ? 'logotrupper' : 'logo-hover'} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} />
    </div>
  );
};


