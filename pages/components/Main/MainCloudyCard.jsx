import styles from '../../../styles/App.module.scss'
import Image from 'next/image';
import cloudyCard from '../img/main/weatherCards/cloudyIcon.png'
export default function MainCloudyCard() {
  return(
      <>
          <div className={styles.cloudysCard}>
            <div className={styles.cardTitle}>Today</div>
            <Image className={styles.cloudyCard} src={cloudyCard}/>
            <div className={styles.temperatureNow}>23°C</div>
            <div className={styles.temperature}>17°C  -  31°C</div>
          </div> 
      </>
  )
}
