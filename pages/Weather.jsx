import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import styles from '../styles/App.module.scss';
import MainContainter from './components/MainContainter';
import WeatherCard from './components/SliderWeatherCard/WeatherCard';

import rainImg from './components/img/main/weatherCards/rain.png'
import nightCloudy from './components/img/main/weatherCards/nightCloudy.png'
import cloudyIcon from './components/img/main/weatherCards/cloudyIcon.png'


export default function Weather() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <MainContainter titels='Weather page' className={styles.weatherPage} >
      <div className={styles.wrapperWeather} >
        <Slider navigation={true} modules={[Navigation]} {...settings} className={styles.slider}>
              <WeatherCard childrenTemp={'21°C  -  24°C'} time={'04.00PM'} weather={'сloudy'} cloudyImg={cloudyIcon } />
              <WeatherCard childrenTemp={'20°C  -  22°C'} time={ '06.00PM'} weather={'rain'} cloudyImg={ rainImg}/>
              <WeatherCard childrenTemp={'18°C  -  22°C'} time={'08.00PM'} weather={'сloudy'} cloudyImg={nightCloudy}  />
              <WeatherCard childrenTemp={'18°C  -  22°C'} time={'08.00PM'} weather={'сloudy'} cloudyImg={nightCloudy}  />
              <WeatherCard childrenTemp={'18°C  -  22°C'} time={'08.00PM'} weather={'сloudy'} cloudyImg={nightCloudy}  />
              <WeatherCard childrenTemp={'18°C  -  22°C'} time={'08.00PM'} weather={'сloudy'} cloudyImg={nightCloudy}  />
              <WeatherCard childrenTemp={'18°C  -  22°C'} time={'08.00PM'} weather={'сloudy'} cloudyImg={nightCloudy}  />
        </Slider>
        <div className={styles.weatherDeckriptionBlock}>
              <div className={styles.descriptionBlock}>Опис сьогоднішньої погоди</div>
              <p>
                На вулиці тепло, але все ще досить прохолодно для цього часу року.
                Термометр показує 11°C, створюючи комфортну атмосферу для прогулянок. 
                Небо вкрите хмарами, які ніжно розтікаються над містом,
                надаючи денному світлу м'який відтінок. В цій атмосфері можна відчути легку вологість, 
                яка навіває затишок та спокій. Це чудовий час, щоб насолодитися прогулянкою в парку 
                або провести час на свіжому повітрі з гарною книгою і гарячим напоєм.
              </p>
        </div>
    </ div>
    </MainContainter>
  );
}
