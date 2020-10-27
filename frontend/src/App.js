import React from 'react';
import Header from './components/Header';
import ImageGroup from './components/ImageGroup';
import ImageList from './components/ImageList';
import Contact from'./components/Contact';



class App extends React.Component{
  render(){
    return (
      <div>
        <Header />
        <ImageGroup/>
        <ImageList/>
       <Contact />
      </div>
    );
  }
}

export default App;