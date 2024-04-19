import styles from '../../../styles/App.module.scss'
import Link  from 'next/link';
import MainCloudyCard from '../Main/MainCloudyCard';
import WeatherCard from './WeatherCard';

export default function SliderWeatherCard() {
  return(
      <>
        <div className={styles.sliderWeatherCardBlock}>
              <div className={styles.weatherLinkBlock}>
                <Link className={styles.weatherLink} href="/">Today</Link> 
                <Link className={styles.weatherLink} href="/Weekly">Weekly</Link> 
              </div> 
          <WeatherCard/>
        </div>
      </>
  )
}