import React from 'react';
import { Container } from 'react-bootstrap';
import './MainContainer.scss';


export default class MainContainer extends React.Component {
    render() {
      return (
        <Container className="App">
          {this.props.children}
        </Container>
      );
    }
  }