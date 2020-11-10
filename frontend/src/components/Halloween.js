import React from "react";
import Header from "./Header";
import Contact from "./Contact";
import Witch from "../portfolio-images/halloween/IMG_9270.jpg";
import Witch2 from "../portfolio-images/halloween/IMG_0076.jpg";
import Witch3 from "../portfolio-images/halloween/IMG_9629.jpg";
import Witch4 from "../portfolio-images/halloween/IMG_9403.jpg";
import "../css/ImageShow.css";


class Halloween extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <img
          className="group-images-list"
          src={Witch}
          alt="halloween"
        />
        <img
          className="group-images-list"
          src={Witch2}
          alt="halloween"
        />
        <img
          className="group-images-list"
          src={Witch4}
          alt="halloween"
        />
        <img
          className="group-images-list"
          src={Witch3}
          alt="halloween"
        />
        <Contact />
      </div>
    );
  }
}

export default Halloween;
