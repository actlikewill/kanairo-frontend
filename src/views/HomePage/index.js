import React from 'react';
import * as Components from '../../components';



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
        <Components.CategoriesTopMenu />  
          <Components.Layout>           
              <Components.CategoriesSideMenu />
              <Components.AdThumbnails data={data} />        
          </Components.Layout>
        </>
        
      );
    }

    
  }

export default Home;