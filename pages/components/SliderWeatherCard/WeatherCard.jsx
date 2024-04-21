import styles from '../../../styles/App.module.scss'
import Image from 'next/image';
export default function WeatherCard({childrenTemp, time, weather, cloudyImg}) {
    return (
        <>
            <div className={styles.weatherCardBlock}>
                <Image src={cloudyImg} className={styles.weatherImg} alt={ cloudyImg} />
                <div className={styles.iconSubTitleBlock}>
                    <div className={styles.iconSubTitleWeather}>{weather}</div>
                    <div className={styles.iconSubTitleTimes}>{ time}</div>
                </div>
                <div className={styles.weatherTemp}>{childrenTemp}</div>
            </div>
        </>
    )
}