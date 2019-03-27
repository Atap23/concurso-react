import React from "react";
import { Button } from "react-bootstrap";

const PedidorDeGatos = ({ nivelAnsiedadGatuna, onClick }) => {
  const nivelCritico = nivelAnsiedadGatuna > 7;
  return (
    <Button
      className="w-25"
      size="md"
      onClick={onClick}
      disabled={nivelCritico}
      variant={nivelCritico ? "danger" : "primary"}>
      {nivelCritico ? "Es por tu bien" : "¡DAME MÁS!"}
    </Button>
  );
};

export default PedidorDeGatos;
