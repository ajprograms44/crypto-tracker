import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../src/styles/App.css';
import CoinContainer from './components/CoinsContainer';



const App = () => (
      <div className="App">
        <CoinContainer/>
      </div>
);
export default App;
