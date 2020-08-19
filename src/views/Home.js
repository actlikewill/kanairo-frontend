import React, {Fragment} from 'react';
import Header from '../components/Header';
import AdThumbnails from '../components/AdThumbnails';

export default class Home extends React.Component {
    render() {
      return (
          <Fragment>
              <Header />
              <AdThumbnails />            
          </Fragment>
        
      );
    }
  }