import styles from '../../../styles/App.module.scss'
import Link  from 'next/link';
import WeatherCard from './WeatherCard';

import rainImg from '../img/main/weatherCards/rain.png'
import nightCloudy from '../img/main/weatherCards/nightCloudy.png'
import cloudyIcon from '../img/main/weatherCards/cloudyIcon.png'

export default function SliderWeatherCard() {
  return(
      <div className={styles.sliderWrap}>
        <div className={styles.sliderWeatherCardBlock}>
              <div className={styles.weatherLinkBlock}>
                <Link className={styles.weatherLink} href="/">Today</Link> 
                <Link className={styles.weatherLink} href="/Weather">Weekly</Link> 
              </div> 
          <div className={styles.weatherCardsBlock}>
          <WeatherCard childrenTemp={'21°C  -  24°C'} time={'04.00PM'} weather={'сloudy'} cloudyImg={cloudyIcon } />
          <WeatherCard childrenTemp={'20°C  -  22°C'} time={ '06.00PM'} weather={'rain'} cloudyImg={ rainImg}/>
          <WeatherCard childrenTemp={'18°C  -  22°C'} time={'08.00PM'} weather={'сloudy'} cloudyImg={nightCloudy}  />
          </div>
        </div>
      </div>
  )
}