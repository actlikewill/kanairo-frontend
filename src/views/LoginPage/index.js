import React from 'react';
import {ReactComponent as Logo} from '../../components/Header/img/logo.svg';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import validator from './validations';
import './LoginPage.scss';

import { authRequest } from '../../redux/actions';


class LoginPage extends React.Component {  

  constructor(props) {
    super(props);
    this.state = {
        displayForm: "loginForm",
        error: null
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
                <Logo className="svg-logo" />
              </div>
              <h4 className="font-weight-bold">Login</h4>
              <Form name="loginForm" onSubmit={this.handleSubmit}>
                <Form.Group controlId="loginForm">                          
                  <Form.Control type="text" placeholder="  Email" name="email" onChange={this.handleChange}/>
                  <div className="formError">{error.email ? <span>{error.email}</span> :null}</div>                      
                  <Form.Control type="password" placeholder="  Password" name="password" onChange={this.handleChange}/>
                  <div className="formError">{error.password ? <span>{error.password}</span> :null}</div>
                  <div className="formError">{error ?  <span>{error.detail}</span> :null}</div>
                  <Button data-testid="loginButton" block variant="success" className="loginSubmit" type="submit">Login</Button>
                  <hr/>
                  <div className="switchForm">
                  <p>Don't have an account? <span data-testid="switch-to-registerForm" onClick={()=> this.switchForm('registerForm')}>Create an Account Here.</span></p>
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
               <Logo className="svg-logo" />
              </div>

              <h4 className="font-weight-bold">Create Account</h4>
              <Form name="registerForm" onSubmit={this.handleSubmit}>
                <Form.Group controlId="registerForm">                         
                  <Form.Control type="email" placeholder="  Email" name="email" onChange={this.handleChange}/>
                  <div className="formError">{error.email ? <span>{error.email}</span> :null}</div>                       
                  <Form.Control type="text" placeholder="  Username" name="username" onChange={this.handleChange}/>
                  <div className="formError">{error.username ? <span>{error.username}</span> :null}</div>                       
                  <Form.Control type="password" placeholder="  Password" name="password" onChange={this.handleChange}/>
                  <div className="formError">{error.password ? <span>{error.password}</span> :null}</div>                       
                  <Form.Control type="password" placeholder="  Confirm Password" name="confirmPassword" onChange={this.handleChange}/>
                  <div className="formError">{error.confirmPassword ? <span>{error.confirmPassword}</span> :null}</div>  
                  <div className="formError">{error ? <span>{error.detail}</span> :null}</div>
                  <Button data-testid="registerButton" block variant="success" className="loginSubmit" type="submit">Create Account</Button>
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
    requestAuth: (data, requestType)=> dispatch(authRequest(data, requestType))
  }
}

const mapsStateToProps = (state, oP) => {
  return {
    authError: state.userReducer.error,
    loginSuccess: state.userReducer.loginSuccess
  }
}


export default connect(mapsStateToProps, mapDispatchToProps)(LoginPage);