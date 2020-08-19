import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import './SingleAdThumbnail.scss'

export default class SingleAdThumbnail extends React.Component {
    
    render() {         
        return (
            <Col lg={3}>
                <Card className='adThumbnail mt-3' style={{ width: '15rem', height: '1' }}>
                    <Card.Img variant="top" src="https://via.placeholder.com/150" />
                    <Card.Body className='p-1 m-0'>
                        <Card.Title className='title p-0 m-0'>{this.props.title}</Card.Title>
                            <Card.Text className='description m-0'>{this.props.description}</Card.Text>
                            <Card.Text className='price m-0'>{this.props.price}</Card.Text>
                        <Button size='sm' variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}