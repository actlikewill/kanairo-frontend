import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import { openMenu, closeMenu } from '../../redux/actions';
import Layout from './Layout';
import AdThumbnails from '../../components/AdThumbnails';
import CategoriesTopMenu from '../../components/CategoriesTopMenu';
import CategoriesSideMenu from '../../components/CategoriesSideMenu';


class Home extends React.Component {
  
    render() {
      const {openMenu, closeMenu} = this.props;
      return (
        <>
          <CategoriesTopMenu closeMenu={closeMenu} openMenu={openMenu}/>
          <Layout>           
              <CategoriesSideMenu />
              <AdThumbnails />        
          </Layout>
        </>
        
      );
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
  )(Home)