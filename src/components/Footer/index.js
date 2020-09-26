import React from 'react';
import './Footer.scss';
import { withRouter } from 'react-router-dom';

class Footer extends React.Component {
    
    render() {
      const { location : { pathname }} = this.props;
      const date = new Date();
      return (
        <>
        {
           pathname === "/login" ? null :

        <div className="footer">
          <p>All Rights Reserved. &copy; {date.getFullYear()} Kaniaro Inc. </p>
        </div>
        }
        </>
      );
    }
  }

  export default withRouter(Footer);