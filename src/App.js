import React, { Component } from 'react';
import './App.css';
import ReleaseBox from "./containers/ReleaseBox";

class App extends Component {
  render(){
    return (
      <div className="App">
        <ReleaseBox />
      </div>
    );
  }
}

export default App;
