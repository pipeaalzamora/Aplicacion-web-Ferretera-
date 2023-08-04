import React from "react"
import Reseñas from "./Reseñas/Reseñas"
import Slider from "./Slider/Slider"
import "./inicio.css"

export default function Inicio() {
    return(
        <>  
        <div className="inicio">
            <Slider/>
            <Reseñas/>
        </div>
        </>
    )
}

