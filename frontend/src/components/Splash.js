import React from 'react';
import Header from './Header';
import Contact from './Contact';
import ImageGroup from './ImageGroup';


class Splash extends React.Component{
    render(){
        return (
            <div>
                <Header/>
                <ImageGroup/>
                <Contact/>
            </div>
        )
    }
}

export default Splash;