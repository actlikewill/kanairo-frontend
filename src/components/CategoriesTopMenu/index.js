import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { openMenu, closeMenu } from '../../redux/actions';
import { Row, Col } from 'react-bootstrap';
import './CategoriesTopMenu.scss';

class CategoriesTopMenu extends React.Component {

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
                       <Link key={item} to="/home">               
                            <Col md='auto'>
                                <div onClick={() => {openMenu(item)}} className="menu-item p-2 m-0">
                                    {item}
                                </div>                    
                            </Col>
                      </Link> 
                    )
                })
            }             
            </Row>            
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
      openMenu: item => dispatch(openMenu(item)),
      closeMenu: () => dispatch(closeMenu())
    }
  }

export default connect(
    null,
    mapDispatchToProps
  )(CategoriesTopMenu)