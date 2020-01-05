import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



function FirstApp(){
  return(
    <div className="App">
      My firstComponet
    </div>
  );
}


function App() {
  return (
    <div className="FirstComponent">
      My hello App
    </div>
  );
}

//class component
class FirstComponent extends Component{
  render(){
    return (
      <div className = "firstComponent">
        firstComponent
      </div>
    );
  }
}

export default App;
