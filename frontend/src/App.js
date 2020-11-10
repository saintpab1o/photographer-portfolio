import React from 'react';
// import Header from './components/Header';
// import ImageGroup from './components/ImageGroup';
// import Contact from'./components/Contact';
import About from './components/About';
import Splash from './components/Splash';
import { BrowserRouter, Route  } from 'react-router-dom';



class App extends React.Component{
  render(){
    return (
      <div>
        <BrowserRouter>
          <Route exact path="/" component={Splash} />
          <Route exact path="/about" component={About} />
          {/* <Route exact path="/booking" component={Booking} /> */}
        </BrowserRouter>
      </div>
    );
  }
}

export default App;