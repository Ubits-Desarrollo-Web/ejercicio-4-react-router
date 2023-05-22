import React from "react";
import { useParams } from "react-router-dom";

const VistaNumeros = () => {
    const {num} = useParams()
    return <div className="VistaNumeros">
        Numero seleccionado: {num}
    </div>;
}

export default VistaNumeros;