import React from 'react';
import {ReactComponent as Logo} from '../../components/Header/img/logo.svg';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { loginValidator, registerValidator } from './validations';
import history from '../../App/history';
import './LoginPage.scss';

import { loginRequest } from '../../redux/actions';


class LoginPage extends React.Component {  

  constructor(props) {
    super(props);
    this.state = {
        displayForm: "loginForm"
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getValidatorAndDispatchMethod (name) {
    const { requestLogin } = this.props
    let validator, sendRequest;
    switch(name) {
      case "loginForm": 
        validator = loginValidator;
        sendRequest = requestLogin;
      break;
      case "registerForm": 
      validator = registerValidator;
      break;
    }
    return {validator, sendRequest};
  }

    handleChange(event) {
      const { name, value } = event.target;
       this.setState((prevProps) =>{
          return {formData: {...prevProps.formData, [name]: value}}        
        }); 
       }   

    handleSubmit(event) {      
      event.preventDefault();
      const { name } = event.target;      
      const { formData } = this.state;     
      const { validator, sendRequest } = this.getValidatorAndDispatchMethod(name);
      validator.validate({...formData}, { abortEarly: false})
        .then((valid) => {          
          sendRequest(valid);
        })
        .catch(e => {
          const { errors } = e;         
          this.setState({error: errors[0]});
        })
    
    
  }
    switchForm(displayForm) {
      this.setState({
          displayForm,
          formData: null,
          error: null
        })
    }

   
    render() {  
        document.title = "Login | Kanairo"
        const { displayForm, error } = this.state;        
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
                  <Form.Control type="text" placeholder="  Username" name="username" onChange={this.handleChange}/>                      
                  <Form.Control type="password" placeholder="  Password" name="password" onChange={this.handleChange}/>
                  <div className="formError">
                  {
                    error ? 
                    <span>{error}</span>
                    :null
                  }
                  </div>
                  <Button block variant="success" className="loginSubmit" type="submit">Login</Button>
                  <hr/>
                  <div className="switchForm">
                  <p>Don't have an account? <span onClick={()=> this.switchForm('registerForm')}>Create an Account Here.</span></p>
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
                  <Form.Control type="text" placeholder="  Username" name="username" onChange={this.handleChange}/>                       
                  <Form.Control type="password" placeholder="  Password" name="password" onChange={this.handleChange}/>                       
                  <Form.Control type="password" placeholder="  Confirm Password" name="confirmPassword" onChange={this.handleChange}/>
                  <div className="formError">
                  {
                    error ? 
                    <span>{error}</span>
                    :null
                  }
                  </div>
                  <Button block variant="success" className="loginSubmit" type="submit">Create Account</Button>
                  <hr/>
                  <div className="switchForm">
                    <p>Already Have an account? <span onClick={()=> this.switchForm('loginForm')}>Login Here.</span></p>
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
    requestLogin: data => dispatch(loginRequest(data))
  }
}

export default connect(null, mapDispatchToProps)(LoginPage);