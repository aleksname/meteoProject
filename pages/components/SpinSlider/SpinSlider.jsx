import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import styles from '../../../styles/App.module.scss';
import SpinSlids from './SpinSlids';
import color1 from '../img/GamesCard/cardIcon1.png'
import color2 from '../img/GamesCard/cardIcon2.png'

export default function Weather() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

    return (
      <>
        <Slider navigation={true} modules={[Navigation]} {...settings} className={styles.spinSlider}>
                <SpinSlids color={ color1} />
                <SpinSlids color={ color2} />
                <SpinSlids color={ color2} />
                <SpinSlids color={ color2} />
                <SpinSlids color={ color2} />
                <SpinSlids color={ color2} />
                <SpinSlids color={ color2} />
        </Slider>
      </>
          
  );
}
