import React from 'react';
import MainContainer from './components/MainContainer';
import Home from './views/Home';
import './App.scss';

function App() {
  return (
    <MainContainer className="App">
      <Home name="Kanairo"/>
    </MainContainer>
  );
}

export default App;
