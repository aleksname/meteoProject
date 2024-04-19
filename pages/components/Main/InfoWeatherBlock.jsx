// file:InfoWeatherBlock
import Image from 'next/image';
import styles from '../../../styles/App.module.scss'
import windIcon from '../img/main/32/Wind/outline.png'
import tempIcon from '../img/main/32/Temperature/temperature_fill.png'
import rainIcon from '../img/main/32/Rain/outline.png'
import humidityIcon from '../img/main/32/Humidity/outline.png'
export default function InfoWeatherBlock() {
  return(
      <>
           <div className={styles.infoWeatherBlock}>
                      <div className={styles.weatherCards}>
                          <div className={styles.cardsWind}>
                            <div className={styles.windIconContainer}>
                              <Image src={windIcon} className={styles.windIcon} />
                            </div>
                            <div className={styles.icons}>Wind 3km/h</div>
                          </div>

                          <div className={styles.cardsWind}>
                            <div className={styles.windIconContainer}>
                                <Image src={tempIcon} className={styles.windIcon} />
                            </div>
                            <div className={styles.icons}>Temp 29°C</div>
                           </div>

                          <div className={styles.cardsWind}>
                            <div className={styles.windIconContainer}>
                                <Image src={rainIcon} className={styles.windIcon} />
                            </div>
                           <div className={styles.icons}>Rain 78%</div>
                          </div>

                          <div className={styles.cardsWind}>
                            <div className={styles.windIconContainer}>
                                <Image src={humidityIcon} className={styles.windIcon} />
                            </div>
                            <div className={styles.icons}>Humidity 75%</div>
                        </div>
                      </div>    
                  </div>
      </>
  )
}