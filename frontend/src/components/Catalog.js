import React from 'react';
import Header from './Header';
import Contact from './Contact';

class Catalog extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                Catalog Pictures Here
                <Contact/>
            </div>
        )
    }
}

export default Catalog;