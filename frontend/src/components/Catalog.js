import React from 'react';
import Header from './Header';
import Contact from './Contact';
import WTF from "../portfolio-images/wtfcity/IMG_8236.jpg";
import WTF2 from "../portfolio-images/wtfcity/IMG_8321.jpg";
import WTF3 from "../portfolio-images/wtfcity/IMG_8271.jpg";
import WTF4 from "../portfolio-images/wtfcity/IMG_8384.jpg";
import WTF5 from "../portfolio-images/wtfcity/IMG_8065.jpg";
import WTF6 from "../portfolio-images/wtfcity/IMG_8212.jpg";
import WTF7 from "../portfolio-images/wtfcity/IMG_8084.jpg";
import Witch from "../portfolio-images/halloween/IMG_9270.jpg";
import Witch2 from "../portfolio-images/halloween/IMG_0076.jpg";
import Witch3 from "../portfolio-images/halloween/IMG_9629.jpg";
import Witch4 from "../portfolio-images/halloween/IMG_9403.jpg";

class Catalog extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                Catalog Pictures Here
                <Contact/>
            </div>
        )
    }
}

export default Catalog;