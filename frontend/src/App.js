import React from 'react';
import Header from './components/Header';
import ImageGroup from './components/ImageGroup';
// import ImageList from './components/ImageList';
import Contact from'./components/Contact';
import About from './components/About'



class App extends React.Component{
  render(){
    return (
      <div>
        <Header />
        <ImageGroup/>
       <Contact />
      </div>
    );
  }
}

export default App;