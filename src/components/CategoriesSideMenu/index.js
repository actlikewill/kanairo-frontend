import React from 'react';
import {connect} from 'react-redux';
import './CategoriesSideMenu.scss';

function MenuItem (props) {
    return (
        <div className="menuItem">
            {props.title}
        </div>
    )
}

const menuItems = [
    'Mobile Phone',
    'Furniture',
    'Electronics',
    'Fashion and Beauty',
    'Food and Agriculture'
];



class SideMenu extends React.Component {
    render() {
        const { showMenu } = this.props;
        return (
            <div className={`${showMenu ? 'showMenu ': ''} sideMenu mr-3`}>
               {menuItems.map(item => <MenuItem key={item} title={item} />)}
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state);
    return { showMenu: state.menusReducer.showMenu }
  }
  

export default connect(mapStateToProps)(SideMenu);