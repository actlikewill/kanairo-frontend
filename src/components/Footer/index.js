import React from 'react';
import './Footer.scss';

export default class Footer extends React.Component {
    
    render() {
        const date = new Date();
      return (
        <div className="footer">
          <p>All Rights Reserved. &copy; {date.getFullYear()} Kaniaro Inc. </p>
        </div>
      );
    }
  }