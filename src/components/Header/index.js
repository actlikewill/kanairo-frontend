import React from 'react';
import { Container, InputGroup, FormControl, Row, Col, Button } from 'react-bootstrap';
import {ReactComponent as Logo} from './img/logo.svg';
import './Header.scss';
import history from '../../App/history';

export default class Header extends React.Component {
    render() {
      return (
        <Container className='p-0 m-0' fluid>
        <div className="header">
          <Row noGutters={true} className="d-flex align-items-center">
            <Col>
              <Logo className="svg-logo"/>
            </Col>
            <Col>
            <InputGroup size="sm" className="">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-sm">Search Ads</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
            </InputGroup>
            </Col>

            <Col className="d-flex justify-content-end"> 
            <div className="">
              <a>Sign In</a>
              <span> | </span>
              <a>Register</a>
            </div>
            </Col>

            <Col className="d-flex justify-content-end">
            <Button onClick={() => history.push("/create-ad")} variant="danger" size="lg">
              Create Ad
            </Button>{' '}
            </Col>
          </Row>
        </div>
        </Container>
      );
    }
  }