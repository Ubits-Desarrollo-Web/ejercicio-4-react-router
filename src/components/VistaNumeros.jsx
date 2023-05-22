import React from "react";
import { useParams } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";

const VistaNumeros = () => {
    // throw new Error(); para probar errorboundary
    const {num} = useParams();
    return <div className="VistaNumeros">
        Numero seleccionado: {num}
    </div>;
}

const VistaNumerosErrorBoundary = ()=>{
    return (
        <ErrorBoundary>
            <VistaNumeros/>
        </ErrorBoundary>
    )
}

export default VistaNumerosErrorBoundary;