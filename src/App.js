import React, { Component } from 'react';
import FirstComponent from './components/learning-example/FirstComponent'
import logo from './logo.svg';
import './App.css';


// This is my skype id ==> live:.cid.73febdac7a6c327d


function FirstApp(){
  return(
    <div className="App">
      FirstApp
    </div>
  );
}


function App() {
  return (
    <div className="FirstComponent">
      My hello 
      <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent>
      <ThirdComponent></ThirdComponent>
      <FirstApp></FirstApp>
    </div>
  );
}

//class component

class SecondComponent extends Component{
  render(){
    return (
      <div className = "secondComponent">
           <LearningComponents></LearningComponents>
      </div>
    );
  }
}

function ThirdComponent(){
  return(
    <div className = "ThirdComponent">
    ThirdComponent
  </div>
);
}

class LearningComponents extends Component{
  render(){
    return (
      <div className = "LearningComponents">
        My hello world
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
        <ThirdComponent></ThirdComponent>
        <FirstApp></FirstApp>
      </div>
    );
  }
}
    

 




export default App;
