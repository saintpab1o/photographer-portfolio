import React from 'react';
// import Header from './components/Header';
// import ImageGroup from './components/ImageGroup';
// import Contact from'./components/Contact';
import About from './components/About';
import Splash from './components/Splash';
// import Catalog from './components/Catalog';
import Booking from './components/Booking';
// import Calender from './components/Calender';
import { HashRouter,BrowserRouter, Route , Router  } from 'react-router-dom';
import Wtfcity from './components/Wtfcity';
import Halloween from './components/Halloween';
import { Switch } from "react-router-dom";



class App extends React.Component{
  render(){
    return (
      <div>
        
          <BrowserRouter>
            <Route exact path="/" component={Splash} />
            <Route exact path="/about" component={About} />
            {/* <Route exact path="/catalog" component={Catalog} /> */}
            <Route exact path="/booking" component={Booking} />
            <Route exact path="/wtfcity" component={Wtfcity} />
            <Route exact path="/10.31" component={Halloween} />
          </BrowserRouter>
      
      </div>
    );
  }
}

export default App;