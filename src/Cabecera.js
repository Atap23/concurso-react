import React from 'react';

const Cabecera = ({nivelAnsiedadGatuna, theme}) => {
  let cabeceraAMostrar = null;
  let estilosCabecera = {
    color: (theme === 'dark') ? 'white' : 'black'
  }

  switch(nivelAnsiedadGatuna) {
    case 0:
    case 1:
    case 2: {cabeceraAMostrar = <h3 style={estilosCabecera}>¡HOSTIA UN GATO!</h3>; break;}
    case 3:
    case 4: {cabeceraAMostrar = <h5 style={estilosCabecera}>Ya aburre un poco... no?</h5>; break;}
    case 5:
    case 6: {cabeceraAMostrar = <h1 style={estilosCabecera}>¡PARA YAAA!</h1>; break;}
    default: {cabeceraAMostrar = <h1 style={estilosCabecera}>¡PARA YAAA!</h1>; break;}
  }
  console.log(nivelAnsiedadGatuna)
  return cabeceraAMostrar;
}

export default Cabecera;