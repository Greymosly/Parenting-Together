import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import image1 from '../../../static/assets/Images/Imogene/Imi&Abby.jpg';
import image2 from '../../../static/assets/Images/Imogene/Imi&Ally.jpg';
import image3 from '../../../static/assets/Images/Imogene/Imi&Goat.jpg';
import image4 from '../../../static/assets/Images/Imogene/ImiBabyHair.jpg';
import image5 from '../../../static/assets/Images/Imogene/ImiSpookyHouse.jpg';
import image6 from '../../../static/assets/Images/Imogene/ImiSwing.jpg';

const PictureSlider = () => {
    return (
        <div>
            <AliceCarousel >
                <img src={image1} className="sliderimg"/>
                <img src={image2} className="sliderimg"/>
                <img src={image3} className="sliderimg"/>
                <img src={image4} className="sliderimg"/>
                <img src={image5} className="sliderimg"/>
                <img src={image6} className="sliderimg"/>
            </AliceCarousel>
        </div>
    )
}

export default PictureSlider;