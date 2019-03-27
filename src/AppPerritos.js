import React, { Component } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import axios from "axios";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import {changeTheme, changePhotoSize } from './redux/actions';

function mapDispatchToProps(dispatch) {
  return {
    changeAppTheme: theme => dispatch(changeTheme(theme)),
    changeAppPhotoSize: size => dispatch(changePhotoSize(size))
  }
}

const mapStateToProps = state => {
  return {...state};
}

class AppPerritos extends Component {
  constructor() {
    super();

    this.state = {
      perritos: []
    };
  }

  componentDidMount() {
    this.pillaMasPerritos();
  }

  pillaMasPerritos = () => {
    axios.get("https://dog.ceo/api/breeds/image/random/10")
      .then(response => {
        this.setState({
          perritos: response.data.message
        });
      });
  }

  pintarUnPerrito = (id, url, index) => {
    return (
      <Carousel.Item key={id}>
        <div>
          <img
            className='img-fluid'
            alt='Third slide'
            src={url}
            style={{
              height: '400px',
              width: '100%',
              objectFit: 'cover',
              objectPosition: 'center'
            }}
          />
        </div>
        <Carousel.Caption>
          <h3>Perrito bonito número {index + 1}</h3>
        </Carousel.Caption>
      </Carousel.Item>
    );
  }

  render() {
    const { theme, size } = this.props;

    return (
      <Container style={{padding: '60px 0', backgroundColor: (theme === 'dark') ? 'black' : 'white'}} fluid={true}>
        <Row style={{margin: '20px 0'}}>
          <Col className="text-center" xs={12}>
            {/* <Cabecera theme={theme} nivelAnsiedadGatuna={this.state.nivelAnsiedadGatuna} /> */}
          </Col>
          <Col className="text-center" xs={4}>
            <h6 style={{color: (theme === 'dark') ? 'white' : 'black'}}>TEMA:</h6>
            <div>
              <button onClick={() => {this.props.changeAppTheme('light')}} className="btn btn-success m-2">LIGHT</button>
              <button onClick={() => {this.props.changeAppTheme('dark')}} className="btn btn-success m-2">DARK</button>
            </div>
          </Col>
          <Col className="text-center" xs={4}>
            <h6 style={{color: (theme === 'dark') ? 'white' : 'black'}}>GATITOS:</h6>
            <div>
              <button onClick={() => {this.props.history.push('/')}} className="btn btn-success m-2">GO!</button>
            </div>
          </Col>
          <Col className="text-center" xs={4}>
            <h6 style={{color: (theme === 'dark') ? 'white' : 'black'}}>TAMAÑO DE LA FOTO:</h6>
            <div>
              <button onClick={() => {this.props.changeAppPhotoSize('normal')}} className="btn btn-success m-2">NORMAL</button>
              <button onClick={() => {this.props.changeAppPhotoSize('small')}} className="btn btn-success m-2">PEQUEÑA</button>
            </div>
          </Col>
        </Row>
        <Row style={{height: '100%'}}>
          <Carousel className="justify-content-center" style={{width: (size === 'small') ? '50%' : '90%', height: '70%', marginTop: '100px', marginBottom: '100px', marginLeft: 'auto', marginRight: 'auto'}} interval={null}>
            {this.state.perritos.map((perrito, i) => {
              return this.pintarUnPerrito('perrito-' + i, perrito, i);
            })}
          </Carousel>
        </Row>
      </Container>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppPerritos));
