import React from 'react';
import { Container } from 'react-bootstrap';


export default class MainContainer extends React.Component {
    render() {
      return (
        <Container>
          {this.props.children}
        </Container>
      );
    }
  }