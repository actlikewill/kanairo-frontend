import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, Col } from 'react-bootstrap';
import './SingleAdThumbnail.scss'

class SingleAdThumbnail extends React.Component {
    
    render() {
        const { showMenu } = this.props;  
        return (
            
                <Col lg={3}>
                    <Link to={`/ad/${this.props.title}`}>
                        <Card className={`${showMenu ? 'smallerThumbnail' : 'largerThumbnail'} adThumbnail mb-3`}>
                            <Card.Img variant="top" src="https://via.placeholder.com/150" />
                            <Card.Body className='p-1 m-0'>
                                    <Card.Text className='title m-0'>{this.props.title}</Card.Text>
                                    <Card.Text className='price m-0'>{this.props.price}</Card.Text>                       
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
            
        )
    }
}

function mapStateToProps(state) {
    console.log(state);
    return { showMenu: state.menusReducer.showMenu }
  }
  

export default connect(mapStateToProps)(SingleAdThumbnail);