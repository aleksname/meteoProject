import styles from '../../../styles/App.module.scss'
import Image from 'next/image';
import weatherIcon from '../img/main/weatherCards/cloudyIcon.png'
export default function WeatherCard() {
    return (
        <>
            <div className={styles.weatherCardBlock}>
                <Image src={weatherIcon} />
                <div className={styles.iconSubTitleBlock}>
                    <div className={styles.iconSubTitleWeather}>rain</div>
                    <div className={styles.iconSubTitleTimes}>4.00</div>
                </div>
                <div className={styles.weatherTemp}>23°C</div>
            </div>
        </>
    )
}