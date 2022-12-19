import { React, useState } from "react";
import "../Display/display.css";

function Display() {
  const [valor, setValor] = useState(0);

  const sumar = () => {
    setValor(valor + 1);
  };
  const reset = () => {
    setValor(0);
  };
  const restar = () => {
    setValor(valor - 1);
  };
  const sumarCinco = () => {
    setValor(valor + 5);
  };

  return (
    <div className="DisplayContainer">
      <h1>Contador</h1>
      <h2>{valor}</h2>

      <button onClick={sumar}>Aumentar</button>
      <button onClick={reset}>Reiniciar</button>
      <button onClick={restar}>Reducir</button>
      <button onClick={sumarCinco}>+5</button>
    </div>
  );
}

export default Display;
