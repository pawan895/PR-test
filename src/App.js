import logo from './logo.svg';
import './App.css';
import React from 'react';
import Card from './components/card';

function App() {
  const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  const cardContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    overflow: 'hidden',

  };

  const scrollViewStyle = {
   
   
      overflowY: 'scroll',
      maxHeight: 'calc(100vh - 20px)',
      scrollbarWidth: 'thin',
      scrollbarColor: 'darkgray transparent',
    };

  

  return (
    <div className="App" style={style}>
      <div style={scrollViewStyle}>
        <div style={cardContainerStyle}>
          <Card name="Pawan" number="20MIS0227" />
          <Card name="Tirth" number="21BCE2058" />
         
        </div>
      </div>
    </div>
  );
}

export default App;
