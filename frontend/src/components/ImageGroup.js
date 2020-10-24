import React from 'react';
import WTF from "../portfolio-images/wtfcity/IMG_8236.jpg";
import '../css/ImageGroup.css'

class ImageGroup extends React.Component{
    
    render(){
        return (
          <div >
            <img className="group-images"
              src={WTF}
              alt="wtfcity"
            />
          </div>
        );
    }
}

export default ImageGroup;

