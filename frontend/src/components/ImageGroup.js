import React from 'react';
import WTF from "../portfolio-images/wtfcity/IMG_8236.jpg";
import '../css/ImageGroup.css'
import axios from 'axios';

class ImageGroup extends React.Component {

  state = {
    groups:[]
    }
  // }
  // when you click the imagge
  // query the db
  // locate by project name
  // set state of srcs
  // map over array and render

  componentDidMount = () => {
    this.getGroupImages();
  };



  getGroupImages = () => {
    axios
      .get("http://localhost:4000/api/groupname")
      .then((responce) => {
        const data = responce.data;
        this.setState({groups: data})
       
      })
      .catch(() => {
        alert("error retrieving data");
      });
  };

  render() {
    
    return (
      <div onClick={() => this.getGroupImages()}>
        <img className="group-images" src={WTF} alt="wtfcity" />
      </div>
    );
  }
}

export default ImageGroup;

