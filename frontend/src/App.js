import React from 'react';
import Header from './components/Header';
import ImageGroup from './components/ImageGroup';
import ImageList from './components/ImageList';



class App extends React.Component{
  render(){
    return (
      <div>
        <Header />
        <ImageGroup/>
        <ImageList/>
       
      </div>
    );
  }
}

export default App;