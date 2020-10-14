import React from 'react';
import { connect } from 'react-redux';
import { Container, InputGroup, FormControl, Row, Col, Button } from 'react-bootstrap';
import {ReactComponent as Logo} from './img/logo.svg';
import history from '../../App/history';
import { withRouter, Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { logoutUser } from '../../redux/actions';
import './Header.scss';


class Header extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        showLogout: ''
      }
    }

    showLogoutMenu = () => {
      this.setState((prevState) => {
        const showLogout = prevState.showLogout === "" ? 'showLogoutMenu' : ""
        return {showLogout}
      });
    }

    render() {

      const { location : { pathname }} = this.props;
      const { isAuthenticated, user, logoutRequest } = this.props;
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

              {
                isAuthenticated ? 
                  <Col className="d-flex justify-content-end align-items-center">
                    <div className="user-details">
                    <div onClick={this.showLogoutMenu} className="username">
                      <p>{user.username}
                      {' '}
                      <FontAwesomeIcon icon="caret-down"/>
                      </p>                
                    </div>
                    <div onClick={logoutRequest} className={`user-menu ${this.state.showLogout}`}> 
                        Logout
                    </div>
                    </div>
                    
                  </Col>
                : 

                <Col className="d-flex justify-content-end"> 
                  <div className="">
                    <Link to="/login?newUser=false">Sign In</Link>
                    <span> | </span>
                    <Link to="/login?newUser=true">Register</Link>
                  </div>
                </Col>
              }             
  
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

  const mapStateToProps = (state) => {
    return {
      isAuthenticated: state.userReducer.isAuthenticated,
      user: state.userReducer.user
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
      logoutRequest: () => dispatch(logoutUser())
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));