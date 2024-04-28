// file: MainPage.jsx
import styles from '../../../styles/App.module.scss'
import MainCloudyCard from './MainCloudyCard';
import InfoWeatherBlock from './InfoWeatherBlock';

export default function Main() {
  
  return(
      <>
        <div className={styles.mainBlock}>
              <div className={styles.mainInfoBlock}>
                  <div className={styles.infoTitle}>My home weather station </div>
                  <div className={styles.infoSubTitle}>Friday, Aprile 12</div>
                 <InfoWeatherBlock/>
              </div>
            <MainCloudyCard/>
        </div>
      </>
  )
}
