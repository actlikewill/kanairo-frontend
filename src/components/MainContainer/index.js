import React from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getUserDetails } from '../../redux/actions';
import './MainContainer.scss';


class MainContainer extends React.Component {

  componentDidMount(){
    const token = localStorage.getItem("token");
    if(token) this.props.getUserData(token);
  }

    render() {
      return (
        <Container className="App">
          {this.props.children}
        </Container>
      );
    }
  }


  const mapDispatchToProps = dispatch => {
    return {
      getUserData: (token) => dispatch(getUserDetails(token))
    }
  }

  export default connect(null, mapDispatchToProps)(MainContainer)