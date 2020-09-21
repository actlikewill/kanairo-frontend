import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import history from '../../App/history';
import NewAdForm from './NewAdForm';
import './CreateAd.scss';





class CreateAd extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        showForm: "showForm"
      }
  }

  componentDidMount () {
    
}
  
    render() {  
        document.title = "Create Ad | Kanairo";
        const { showForm } = this.state;
      return (
        <div className="new-ad">
        
        {
            showForm === "showForm" ?
            <div className="ad-form">
                <h3 className="font-weight-bold success">Create New Ad</h3>     
                <NewAdForm />
            </div>
            : null
        }

        {
            showForm === "postAdSuccess" ?
            
                <div className="adSuccess">
                    <div>
                        <FontAwesomeIcon className="messageIconSuccess" icon="images" />
                      <h4  className="font-weight-bold">Your Ad was successfully created.</h4>
                      <Button 
                            className="mt-4 mb-3 actionButtonSuccessandFail"
                            variant="info"
                            onClick={() => history.push('/create-ad')}
                            >Create Another Ad</Button>
                    </div>                                 
                </div>
                
            
            : null
        }

        {
            showForm === "postAdFailure" ?
            
                <div className="adFailure">
                    <div>
                    <FontAwesomeIcon className="messageIconFail" icon="window-close" />
                        <h4 className="font-weight-bold">Something went wrong.</h4>
                        <h6> Your Ad was not created.</h6>

                        <Button 
                            className="actionButtonSuccessandFail"
                            variant="info"
                            onClick={() => history.push('/create-ad')}
                            >Try Again</Button>
                    </div>                   
                </div>
            
            : null
        }

        
        {
            (showForm === "postAdFailure" ||
            showForm === "postAdSuccess") ?
            <div className="homePageLink"><Link to="/">Go to Homepage</Link></div>  
            : null
        }
       
        

        </div>
        
      );
    }

    
  }


export default CreateAd;