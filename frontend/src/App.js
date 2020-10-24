import React from 'react';
import Header from './components/Header';
import ImageGroup from './components/ImageGroup';



class App extends React.Component{
  render(){
    return (
      <div>
        <Header />
        <ImageGroup/>
       
      </div>
    );
  }
}

export default App;