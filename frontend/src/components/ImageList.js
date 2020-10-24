import React from 'react';
import axios from 'axios';


class ImageList extends React.Component {
  state = {
    groups: []
  };

  componentDidMount = () => {
    this.getGroupImages();
  };

  getGroupImages = () => {
    axios.get("/")
      .then((responce) => {
        const data = responce.data;
        this.setState({ groups: data})
      })
      .catch(() => {
        alert("error retrieving data");
      });
  };

  render() {
    return <div>ImageList</div>;
  }
}

export default ImageList;