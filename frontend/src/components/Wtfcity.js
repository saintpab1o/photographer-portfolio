import React from "react";
import WTF from "../portfolio-images/wtfcity/IMG_8236.jpg";
import WTF2 from "../portfolio-images/wtfcity/IMG_8321.jpg";
import WTF3 from "../portfolio-images/wtfcity/IMG_8271.jpg";
import WTF4 from "../portfolio-images/wtfcity/IMG_8384.jpg";
import WTF5 from "../portfolio-images/wtfcity/IMG_8065.jpg";
import WTF6 from "../portfolio-images/wtfcity/IMG_8212.jpg";
import Header from './Header';
import Contact from './Contact';
import '../css/Wtfcity.css'

class Wtfcity extends React.Component{
    render(){
        return (
          <div>
            <Header />
            <img
              className="group-images"
              value="wtfcity"
              src={WTF}
              alt="wtfcity"
            />
            <img
              className="group-images"
              value="wtfcity"
              src={WTF2}
              alt="wtfcity"
            />
            <img
              className="group-images"
              value="wtfcity"
              src={WTF4}
              alt="wtfcity"
            />
            <img
              className="group-images"
              value="wtfcity"
              src={WTF3}
              alt="wtfcity"
            />
            <img
              className="group-images"
              value="wtfcity"
              src={WTF5}
              alt="wtfcity"
            />
            <img
              className="group-images"
              value="wtfcity"
              src={WTF6}
              alt="wtfcity"
            />
            <Contact />
          </div>
        );
    }
}

export default Wtfcity;

