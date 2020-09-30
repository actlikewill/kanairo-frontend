import React from 'react';
import * as Components from '../../components';




class AdDetailPage extends React.Component {
  constructor(props) {
    super(props);

      this.data = {
        title: 'Yamaha Six String Acoustic Guitar',
        description: "FX370C features a spruce top, nato back and sides, an ultra-thin, polyurethane finish and high-spec hardware to ensure the looks, sound and playability of this guitar are all at the top of their gameFX370C features a spruce top, nato back and sides, an ultra-thin, polyurethane finish and high-spec hardware to ensure the looks, sound and playability of this guitar are all at the top of their game",
        price: "13,500",
        imageURL: "https://via.placeholder.com/400x400",
        sellerProfilePictureURL: "https://via.placeholder.com/150",
        datePosted: "22 January 2020",
        location: "Umoja, Nairobi",
        seller: {
        name: "Carlos Santana",
        contact: "0724 444 555",
      }
    }
  }

  
  
    render() {  

      return (
        <> 
          <Components.CategoriesTopMenu />       
          <Components.Layout>           
              <Components.SingleAdDetails {...this.data} />
          </Components.Layout>
        </>
        
      );
    }

    
  }


export default AdDetailPage;