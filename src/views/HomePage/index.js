import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import { openMenu, closeMenu } from '../../redux/actions';
import Layout from '../../components/Layout';
import AdThumbnails from '../../components/AdThumbnails';
import CategoriesSideMenu from '../../components/CategoriesSideMenu';


const data = [
  {
      title: 'Yamaha_Guitar',
      description: 'Yamaha acoustic six string guitar',
      price: "10, 000",

  },
  {
      title: 'Yamaha_Bass',
      description: 'Yamaha acoustic six string guitar',
      price: "10, 000",

  },
  {
      title: 'Yamaha_Drums',
      description: 'Yamaha acoustic six string guitar',
      price: "10, 000",   

  },
  {
      title: 'Yamaha_MotorCycle',
      description: 'Yamaha acoustic six string guitar',
      price: "10, 000",   

  },
  {
      title: 'Yamaha_Keyboard',
      description: 'Yamaha acoustic six string guitar',
      price: "10, 000",   

  },
  {
      title: 'Ibanezz_uitar',
      description: 'Yamaha acoustic six string guitar',
      price: "10, 000",   

  },
  {
      title: 'Ibanez_Bass',
      description: 'Yamaha acoustic six string guitar',
      price: "10, 000",   

  },
  {
      title: 'Fender_Bass',
      description: 'Yamaha acoustic six string guitar',
      price: "10, 000",   

  },
  {
      title: 'Fender_StratoCaster',
      description: 'Yamaha acoustic six string guitar',
      price: "10, 000",   

  },
]

class Home extends React.Component {
  
    render() {      
      return (
        <>        
          <Layout>           
              <CategoriesSideMenu />
              <AdThumbnails data={data} />        
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

export default Home;