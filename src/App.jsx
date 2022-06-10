import React from 'react';
import './App.css';
import Pages from "./components/pages"
import Options from './components/organism/options';

const App = () => {
  return (
    <div className="App">
        <Pages/>
        <Options/>
    </div>
  );
}

export default App;
