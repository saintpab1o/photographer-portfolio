import React from 'react';
// import Header from './components/Header';
// import ImageGroup from './components/ImageGroup';
// import Contact from'./components/Contact';
import About from './components/About';
import Splash from './components/Splash';
import Catalog from './components/Catalog';
import Booking from './components/Booking';
import { BrowserRouter, Route  } from 'react-router-dom';
import Wtfcity from './components/Wtfcity';



class App extends React.Component{
  render(){
    return (
      <div>
        <BrowserRouter>
          <Route exact path="/" component={Splash} />
          <Route exact path="/about" component={About} />
          <Route exact path="/catalog" component={Catalog} />
          <Route exact path="/booking" component={Booking} />
          <Route exact path="/wtfcity" component={Wtfcity} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;