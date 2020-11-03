import React from 'react';
import WTF from "../portfolio-images/wtfcity/IMG_8236.jpg";
import WTF2 from "../portfolio-images/wtfcity/IMG_8321.jpg";
import Witch from "../portfolio-images/halloween/IMG_9270.jpg";
import Witch2 from "../portfolio-images/halloween/IMG_0076.jpg";
import '../css/ImageGroup.css'
import axios from 'axios';

class ImageGroup extends React.Component {
  state = {
    groups: [],
  };
  // }
  // when you click the imagge
  // query the db
  // locate by project name
  // set state of srcs
  // map over array and render

  // componentDidMount = () => {
  //   this.getGroupImages();
  // };

  // getGroupImages = () => {
  //   axios
  //     .get("http://localhost:4000/api/groupname")
  //     .then((responce) => {
  //       const data = responce.data;
  //       this.setState({groups: data})

  //     })
  //     .catch(() => {
  //       alert("error retrieving data");
  //     });
  // };

  loadWTfCity = () => {
    
     
     
    <div>
      <img className="group-images" src={WTF} alt="wtfcity" />
      <img className="group-images" src={WTF2} alt="wtfcity" />
    </div>
    
      
    }
  
  

  

  render() {
    return (
      <div>
        <img className="group-images"  src={WTF} alt="wtfcity" />
        <img className="group-images" src={Witch} alt="10-31-20" />
        <img className="group-images" src={Witch2} alt="10-31-20" />
        <img className="group-images" src={WTF2} alt="wtfcity" />
      </div>
    );
  }
}

export default ImageGroup;

