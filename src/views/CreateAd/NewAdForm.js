import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




class NewAdForm extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            showFormSection: "Category"
        }
    }
   

    changeFormCategory (showFormSection) {
        this.setState({showFormSection})
    }
  
  
    render() {  
       const { showFormSection } = this.state;
      return (
        <>        
        <Form>
        {
            showFormSection === "Category" ? 
        
        <div className="adFormSection">            
            <div className="adCategoryForm FormTop">            
                <Form.Group controlId="exampleForm.ControlSelect1">       
                <Form.Label>Select Category:</Form.Label>
                <p className="form-instructions">
                    Select one Category from the list.
                </p>
                <Form.Control as="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Form.Control>
                </Form.Group>
            </div>
            <div className="adActionButtons">
                <Button variant="outline-info" className="ml-auto actionButton Right" onClick={() => this.changeFormCategory("Images")}>
                    Next
                    {"   "}
                    <FontAwesomeIcon icon="arrow-right" />
                </Button>
            </div>            
        </div>

            : null

    }

{
            showFormSection === "Images" ? 
        
        <div className="adFormSection">    
            
            <div className="adUploadImagesForm FormTop ">           
                <Form.Group controlId="exampleForm.ControlSelect1">       
                <Form.Label>Upload Images:</Form.Label>
                <p className="form-instructions">
                    Please Upload at least two images for your ad.
                </p>
                <Form.File className="adImageUpload" id="adImageUpload"/>           
                </Form.Group>            
            </div>

            <div className="adActionButtons">                
                <Button variant="outline-info" className="actionButton Left" onClick={() => this.changeFormCategory("Category")}>
                    <FontAwesomeIcon icon="arrow-left" />
                    {"   "}
                    Back
                </Button>
                <Button variant="outline-info" className="ml-auto actionButton Right" onClick={() => this.changeFormCategory("Title")}>
                    Next
                    {"   "}
                    <FontAwesomeIcon icon="arrow-right" />
                </Button>
            </div>
        </div>

            : null

        }

    {
        showFormSection === "Title" ?

        <div className="adFormSection">
           <div className="adTitleForm FormTop">
                <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Title:</Form.Label>
                <p className="form-instructions">
                    Add a title for your ad.
                </p>
                <Form.Control type="email" placeholder="Ad Title" />
                </Form.Group>
                
                <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Ad Description:</Form.Label>
                <p className="form-instructions">
                    Write a description for your ad. Be as descriptive as possible.
                </p>
                <Form.Control as="textarea" rows="3" />
                </Form.Group>
            </div>
           
           <div className="adActionButtons">                
                <Button variant="outline-info" className=" actionButton Left" onClick={() => this.changeFormCategory("Images")}>
                    <FontAwesomeIcon icon="arrow-left" />
                    {"   "}
                    Back
                </Button>
                <Button variant="success" className="ml-auto actionButton Right" onClick={() => this.changeFormCategory("Images")}>
                    POST ADVERT
                    {"   "}
                    <FontAwesomeIcon icon="arrow-right" />             
                </Button>
            </div>
        </div>

        : null
    }

        
      </Form>
        </>
        
      );
    }

    
  }


export default NewAdForm;