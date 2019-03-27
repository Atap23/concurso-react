import React from 'react';
import { Button, Collapse } from 'react-bootstrap';

class InformacionAlVoyeurDeGatos extends React.Component {
  constructor() {
    super();

    this.state = {
      textoVisible: false
    };
  }

  mostrarInformacionONo = () => {
    this.setState((state) => {
      return {
        textoVisible: !state.textoVisible
      };
    });
  }

  render() {
    return (
      <React.Fragment>
        <Button className="w-50 mt-3" size="md" variant="primary" onClick={this.mostrarInformacionONo}>Información al voyeur de gatos</Button>
        <Collapse in={this.state.textoVisible}>
          <div className="flex-column justify-content-center align-items-center mt-3 mb-5">
            <div>Es por su propio bien, y para evitar que usted empiece a padecer ailurofilia.</div>
            <div>Para más información visite: <a href="https://www.notigatos.es/que-es-la-ailurofilia/" rel="noopener noreferrer" target="_blank">https://www.notigatos.es/que-es-la-ailurofilia/</a></div>
          </div>
        </Collapse>
      </React.Fragment>
    );
  }
}

export default InformacionAlVoyeurDeGatos;