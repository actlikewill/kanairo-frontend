import React from 'react';
import { Container, InputGroup, FormControl, Row, Col, Button } from 'react-bootstrap';
import {ReactComponent as Logo} from './img/logo.svg';
import './Header.scss';
import history from '../../App/history';
import { withRouter, Link} from 'react-router-dom';

class Header extends React.Component {

    render() {

      const { location : { pathname }} = this.props;
    
      return (
        <>
        {
          pathname === "/login" ? null :

          <Container className='p-0 m-0' fluid>
          <div className="header">
            <Row noGutters={true} className="d-flex align-items-center">
              <Col>
                <Link to="/home">
                  <Logo className="svg-logo"/>
                </Link>
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
                <Link to="/login">Sign In</Link>
                <span> | </span>
                <Link to="/login">Register</Link>
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
        }
        </>        
      );
    }
  }

  export default withRouter(Header);