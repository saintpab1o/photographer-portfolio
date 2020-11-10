import React from 'react';
import WTF from "../portfolio-images/wtfcity/IMG_8236.jpg";
import WTF2 from "../portfolio-images/wtfcity/IMG_8321.jpg";
import Witch from "../portfolio-images/halloween/IMG_9270.jpg";
import Witch2 from "../portfolio-images/halloween/IMG_0076.jpg";
import '../css/ImageGroup.css'
import axios from 'axios';
import ImageList from './ImageList'
import '../portfolio-images/General/reme_backdrop.jpg'

class ImageGroup extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      imageGroup: [],
      term: '1' };   
     
  }

  // }
  // when you click the image
  // query the db
  // locate by project name
  // set state of srcs
  // map over array and render

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/groupname")
      .then((res) => {
        this.setState({ imageGroup: res.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  dataTable() {
    return this.state.imageGroup.map((data, i) => {
      return <ImageList obj={data} key={i} />;
    });
  }


  render() {
    return (
      <div>
        <img 
        className="group-images" value='wtfcity' src={WTF} alt="wtfcity"/>
         
        <img className="group-images" src={Witch} alt="halloween" />
        <img className="group-images" src={Witch2} alt="halloween" />
        <img className="group-images" src={WTF2} alt="wtfcity" />
       
      </div>
    );
  }
}

export default ImageGroup;

