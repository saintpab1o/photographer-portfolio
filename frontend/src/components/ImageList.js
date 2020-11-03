import React from 'react';
// import axios from 'axios';
import WTF from "../portfolio-images/wtfcity/IMG_8236.jpg";
import WTF2 from "../portfolio-images/wtfcity/IMG_8321.jpg";





class ImageList extends React.Component {


  loadWTfCity = () => {
    
      <div>
        <img className="group-images" src={WTF} alt="wtfcity" />
        <img className="group-images" src={WTF2} alt="wtfcity" />
      </div>
    
  }

  // getGroupImages = () => {
  //   axios
  //     .get("http://localhost:4000/api/groupname")
  //     .then((responce) => {
  //       const data = responce.data;
  //       this.setState({ groups: data });
  //     })
  //     .catch(() => {
  //       alert("error retrieving data");
  //     });
  // };

  render() {
    return <div>{this.loadWTfCity}</div>;
  }
}

export default ImageList;