import React, {Fragment} from 'react';
import MainContainer from './components/MainContainer';
import Header from './components/Header';
import Home from './views/Home';
import { Provider } from 'react-redux';
import store from './redux/store.js'
import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <Header />
        <MainContainer className="App">
          <Home name="Kanairo"/>
        </MainContainer>
      </Fragment>
    </Provider>
  );
}

export default App;
