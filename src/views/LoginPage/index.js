import React from 'react';
import {ReactComponent as Logo} from '../../components/Header/img/logo.svg';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import validator from './validations';
import './LoginPage.scss';
import qs from 'query-string';
import { GoogleLogin } from 'react-google-login';
import FacebookAuth from './socialAuthenticationHelpers';
import { authRequest, socialLogin } from '../../redux/actions';


class LoginPage extends React.Component {  

  constructor(props) {
    super(props);
    this.state = {
        displayForm: "loginForm",
        error: null
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fbAuth = new FacebookAuth();
  }
  
  componentDidMount() {
    this.fbAuth.loadFbLoginApi();
    if(this.props.location) {
      const params = qs.parse(this.props.location.search);
    if(params.newUser === 'true') {
      this.setState({ displayForm: 'registerForm'});
        }
      }    
    }
  
  handleFBLogin = () => {
    window.FB.login((response) => {
      if (response.authResponse) {        
        const token =response.authResponse.accessToken;
        console.log(token);     
        this.props.socialAuth(token, 'Bearer facebook')   
       } else {
        console.log('User cancelled login or did not fully authorize.');
       }
    }, {scope: 'email'});
    }

  handleChange(event) {
      const { name, value } = event.target;
       this.setState((prevProps) =>{
          return {formData: {...prevProps.formData, [name]: value}}        
        }); 
       }   

  handleSubmit(event) {      
      event.preventDefault();
      this.setState({validationError: null})
      const { name } = event.target;      
      const { formData } = this.state;     
      validator[name].validate({...formData}, { abortEarly: false})
        .then((data) => {          
         this.props.requestAuth(data, name);              
        })        
        .catch(e => {
          const { inner } = e;
          let validationError = {};
          inner.forEach(e => {validationError[e.path] = e.message});
          if (inner.length > 1 ) validationError.detail = e.message;
          this.setState({validationError});
        })    
  }

  switchForm(displayForm) {
      this.setState({
          displayForm,
          formData: null,
          error: null,
          validationError: null
        })
    }  

  responseGoogle = (response) => {
      console.log(response.accessToken)
      this.props.socialAuth(response.accessToken, 'Bearer google-oauth2')
    }

  responseFacebook = () => {
      console.log(window)
    }

   
  render() {  
        document.title = "Login | Kanairo"
        const { displayForm, validationError } = this.state;
        const { authError  } = this.props;
        const error  = validationError ? validationError : authError ? authError  : "";      
      return (
        <>          
          {
            displayForm === "loginForm" ?
            <div className="loginPage">  
            <div className="loginForm">
              <div className="formLogo">
              <Link to="/home">
                  <Logo className="form-svg-logo"/>
              </Link>
              </div>
              <h4 className="font-weight-bold">Login</h4>
              <Form name="loginForm" onSubmit={this.handleSubmit}>
                <Form.Group controlId="loginForm">                          
                  <Form.Control size="sm" type="text" placeholder="  Email" name="email" onChange={this.handleChange}/>
                  <div className="formError">{error.email ? <span>{error.email}</span> :null}</div>                      
                  <Form.Control size="sm" type="password" placeholder="  Password" name="password" onChange={this.handleChange}/>
                  <div className="formError">{error.password ? <span>{error.password}</span> :null}</div>
                  <div className="formError">{error ?  <span>{error.detail}</span> :null}</div>
                  <Button size="sm" data-testid="loginButton" block variant="success" className="loginSubmit" type="submit">Login</Button>
                  <hr/>
                  <div className="switchForm">
                  <p>Don't have an account? <span data-testid="switch-to-registerForm" onClick={()=> this.switchForm('registerForm')}>Create an Account Here.</span></p>
                  </div>
                  <hr/>
                  <div className="google-login-button">
                  <GoogleLogin
                    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                    buttonText="Login"
                    render={renderProps => (
                      <Button block size="sm" variant="outline-danger" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                        <FontAwesomeIcon icon={['fab', 'google']} />
                        {"  "}
                        Login With Google
                      </Button>
                    )

                    }
                    onSuccess={(r) => this.responseGoogle(r)}
                    onFailure={(r) => this.responseGoogle(r)}
                    cookiePolicy={'single_host_origin'}
                  />
                  </div>
                  <div className="facebook-login-button d-flex justify-content-center">
                    <Button onClick={this.handleFBLogin} block size="sm" variant="outline-primary">
                       <FontAwesomeIcon icon={['fab', 'facebook']} />
                       {"  "}
                       Login With Facebook
                    </Button>
                  </div>
                </Form.Group>
              </Form>
            </div>         
          </div>
          : null
          }

          {
            displayForm === "registerForm" ?
            <div className="loginPage">  
            <div className="loginForm">
              <div className="formLogo">
                <Link to="/home">
                  <Logo className="form-svg-logo"/>
                </Link>
              </div>

              <h4 className="font-weight-bold">Create Account</h4>
              <Form name="registerForm" onSubmit={this.handleSubmit}>
                <Form.Group size="sm" controlId="registerForm">                         
                  <Form.Control size="sm" type="email" placeholder="  Email" name="email" onChange={this.handleChange}/>
                  <div className="formError">{error.email ? <span>{error.email}</span> :null}</div>                       
                  <Form.Control size="sm" type="text" placeholder="  Username" name="username" onChange={this.handleChange}/>
                  <div className="formError">{error.username ? <span>{error.username}</span> :null}</div>                       
                  <Form.Control size="sm" type="password" placeholder="  Password" name="password" onChange={this.handleChange}/>
                  <div className="formError">{error.password ? <span>{error.password}</span> :null}</div>                       
                  <Form.Control  size="sm"type="password" placeholder="  Confirm Password" name="confirmPassword" onChange={this.handleChange}/>
                  <div className="formError">{error.confirmPassword ? <span>{error.confirmPassword}</span> :null}</div>  
                  <div className="formError">{error ? <span>{error.detail}</span> :null}</div>
                  <Button size="sm" data-testid="registerButton" block variant="success" className="loginSubmit" type="submit">Create Account</Button>
                  <hr/>
                  <div className="switchForm">
                    <p>Already Have an account? <span data-testid="switch-to-loginForm" onClick={()=> this.switchForm('loginForm')}>Login Here.</span></p>
                  </div>
                </Form.Group>
              </Form>
            </div>         
          </div>
          : null
          }
        </>        
      );
    }    
  }

const mapDispatchToProps = dispatch => {
 
  return {
    requestAuth: (data, requestType)=> dispatch(authRequest(data, requestType)),
    socialAuth: (token, tokenType)=> dispatch(socialLogin(token, tokenType))
  }
}

const mapsStateToProps = (state, oP) => {
  return {
    authError: state.userReducer.error,
    loginSuccess: state.userReducer.loginSuccess
  }
}


export default connect(mapsStateToProps, mapDispatchToProps)(LoginPage);