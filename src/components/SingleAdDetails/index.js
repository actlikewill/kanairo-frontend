import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./AdDetails.scss";

export default class SingleAdDetails extends React.Component {
  
    render() {        
             const { 
                imageURL,
                title, 
                description,
                price, 
                seller,
                datePosted,
                location,
                sellerProfilePictureURL
        
              } = this.props;
      return (
        <div className="ad-details">
          <div className="ad-images-and-details">

            <div class="ad-detail-image">
              <img alt={title} src={imageURL}/>
            </div>
          
            <div className="ad-mainTitle">
              <h3 className="font-weight-bold">{title}</h3>              
                <p className="date-posted">               
                <span>
                  <FontAwesomeIcon icon="calendar-alt"/>
                  {" "}
                  Date Posted:
                  {" "}
                  {datePosted}
                </span>
                </p>
                <p className="location-posted">               
                <span>
                  <FontAwesomeIcon icon="map-marker"/>
                  {" "}
                  Location:
                  {" "}
                  {location}
                </span>
                </p>
                
            </div>  

            <div className="ad-description">
              <h6 className="font-weight-bold">Description:</h6>
              <p>{description}</p>
            </div>

          </div>
          <div className="ad-price-and-seller">

            <div className="ad-price">
              <h6 className="font-weight-bold">Price:</h6>
              <p className="font-weight-bold">KSH {price}</p>
            </div>

            <div className="ad-seller">              
              <h6 className="font-weight-bold">Seller Details:</h6>
              <div className='seller-picture-details'>
                <div className="seller-profile-picture">
                  <img alt={seller.name} src={sellerProfilePictureURL} />
                </div>

                <div className="seller-name-and-contact">
                  <p> {seller.name}</p>
                  <p> {seller.contact}</p>
                </div> 
              </div>
              

            </div>   
          </div>           
        </div>
      );
    }
  }