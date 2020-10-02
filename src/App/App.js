import React from 'react';
import { Router, Route } from 'react-router-dom';
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
    faWindowClose,
    faCaretDown
} from '@fortawesome/free-solid-svg-icons';

library.add({
    faCalendarAlt,
    faMapMarker,
    faArrowRight,
    faArrowLeft,
    faImages,
    faWindowClose,
    faCaretDown
  });

function App() {
  return (
    <Provider store={store}>
      <div>
       
          <Router history={history}>            

                <Route path="/" component={Components.Header} />

                <Components.MainContainer className="App">                
                  <Route exact path="/" component={Views.HomePage} />
                  <Route exact path="/home" component={Views.HomePage} />
                  <Route exact path="/ad/:title" component={Views.AdDetailPage}  />
                  <Route exact path="/create-ad" component={Views.CreateAd} />
                  <Route exact path="/login" component={Views.LoginPage} />
                </Components.MainContainer>

                <Route path="/" component={Components.Footer} />

          </Router>  
      
        
      </div>
    </Provider>
  );
}

export default App;
