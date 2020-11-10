import React from 'react'
import Header from '../components/Header'
import Contact from '../components/Contact'
import '../css/Splash.css';
import Reme from "../portfolio-images/General/reme_backdrop.jpg";


class About extends React.Component{
    render(){
        return(
        <div>
            <Header/>
            <div className='about-us-text'>
                <h1>
                    About Us
                </h1>
                <h3>
                    Welcome to Headshots! New Yorks premier source for photography services, art tours
                    and artist management.
                    
                </h3>
                    <img className="group-images" src={Reme} alt="reme" />

            </div>
            <Contact/>
        </div>
        )
    }
}

export default About;