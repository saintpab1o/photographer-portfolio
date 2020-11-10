import React from 'react';
import Header from './components/Header';
import ImageGroup from './components/ImageGroup';
// import ImageList from './components/ImageList';
import Contact from'./components/Contact';
import About from './components/About'
import { Switch, Route } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';



class App extends React.Component{
  render(){
    return (
      <div>
        <BrowserRouter>
        <Route exact path="/" component={Header} />
        <Route exact path="/about" component={About} />
    </BrowserRouter>
      </div>
    );
  }
}

export default App;