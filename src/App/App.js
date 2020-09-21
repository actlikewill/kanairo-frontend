import React, {Fragment} from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store.js';
import * as Views from '../views';
import * as Components from '../components';
import history from './history';
import './App.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
    faCalendarAlt,
    faMapMarker,
    faArrowRight,
    faArrowLeft,
    faImages,
    faWindowClose
} from '@fortawesome/free-solid-svg-icons';

library.add({
    faCalendarAlt,
    faMapMarker,
    faArrowRight,
    faArrowLeft,
    faImages,
    faWindowClose
  });

function App() {
  return (
    <Provider store={store}>
      <div>
        <Components.Header />
        <Components.MainContainer className="App">
          <Router history={history}>
            
                <Components.CategoriesTopMenu />
                
                <Route exact path="/" component={Views.HomePage} />
                <Route exact path="/home" component={Views.HomePage} />
                <Route exact path="/ad/:title" component={Views.AdDetailPage}  />
                <Route exact path="/create-ad" component={Views.CreateAd} />
               
          </Router>  
        </Components.MainContainer>
        <Components.Footer />
      </div>
    </Provider>
  );
}

export default App;
