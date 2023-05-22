import React from "react";
import { Link } from "react-router-dom";

const Inicio = () => {
    return <div className="Inicio">
        <Link to={'numeros/1'}>
            <button className="button-styled">1</button>
        </Link>
        <Link to={'numeros/2'}>
            <button className="button-styled">2</button>
        </Link>
        <Link to={'numeros/3'}>
            <button className="button-styled">3</button>
        </Link>
    </div>;
}

export default Inicio;