import React from 'react';
import './Layout.scss';
import { connect } from 'react-redux';


class MainContainer extends React.Component {
    render() {
      const { showMenu } = this.props;
      return (
        <div className={`${showMenu ? 'withMenu' : ''} mt-3`}>
          {this.props.children}
        </div>
      );
    }
  }

function mapStateToProps(state) {
  console.log(state);
  return { showMenu: state.menusReducer.showMenu }
}

export default connect(mapStateToProps)(MainContainer)