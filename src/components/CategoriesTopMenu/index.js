import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './CategoriesTopMenu.scss';

export default class CategoriesTopMenu extends React.Component {

   constructor(props) {
    super(props);
    this.state = {
        showMenu: false
    }
   }
    showMenu(item) {
        console.log(`You clicked ${item}`)
    }
    
    render() {     
        const menuItems = [
            'Mobile Phone',
            'Furniture',
            'Electronics',
            'Fashion and Beauty',
            'Food and Agriculture'
        ];
        const { openMenu, closeMenu } = this.props;
        
        return (
            <Row className='menu-items mt-3' noGutters={true}>
             <>
                <p className="menu-item p-2 m-0" onClick={() => {closeMenu()}}>Categories</p> 
             </>
             {
             menuItems.map(item => {
                    return (
                        <Col md='auto'>
                            <div onClick={() => {openMenu(item)}} className="menu-item p-2 m-0">
                                {item}
                            </div>                    
                        </Col>  
                    )
                })
            }             
            </Row>            
        )
    }
}