import { React, useState } from "react";
import "../Display/display.css";

function Display() {
  const [valor, setValor] = useState(0);

  const sumar = () => {
    setValor(valor + 1);
  };
  const restar = () => {
    setValor(valor - 1);
  };
  const reset = () => {
    setValor(0);
  };
  const sumarCinco = () => {
    setValor(valor + 5);
  };

  return (
    <div className="DisplayContainer">
      <div className="title">
        <h1>Contador</h1>
      </div>
      <div className="screen">
        <h2>{valor}</h2>
      </div>
      <div className="buttons">
        <div className="mainButtons">
          <button onClick={sumar} disabled={valor === 10}>
            {" "}
            Aumentar
          </button>
          <button onClick={restar} disabled={valor === 0}>
            {" "}
            Reducir
          </button>
        </div>
        <div className="otherButtons">
          <button onClick={reset}>Reiniciar</button>
          <button onClick={sumarCinco} disabled={valor === 10}>
            +5
          </button>
        </div>
      </div>
    </div>
  );
}

export default Display;
