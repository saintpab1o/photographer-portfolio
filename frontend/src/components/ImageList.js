import React from 'react';
// import axios from 'axios';
// import WTF from "../portfolio-images/wtfcity/IMG_8236.jpg";
// import WTF2 from "../portfolio-images/wtfcity/IMG_8321.jpg";
import '../css/ImageList.css'





class ImageList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchParam: "",
    };
  }
  

  render() {
    return (
      <div className="list">
        {this.props.obj.projectname}
        {this.props.obj.srcs}
      </div>
    );
  }
}

export default ImageList;