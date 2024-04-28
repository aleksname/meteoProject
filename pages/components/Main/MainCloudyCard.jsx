import styles from '../../../styles/App.module.scss'
import Image from 'next/image';
import { useEffect } from 'react';
import { useState } from 'react';

export default function MainCloudyCard() {
  const [icon, setIcon] = useState(null);
  const [temp, setTemp] = useState(null);
  const [feels, setFeels] = useState(null);


  useEffect(() => {
    fetch("https://api.openweathermap.org/data/2.5/weather?lat=48.748718&lon=30.221500&units=metric&appid=28cf33db8bb5ca1ba332099cbea140c1")
      .then(res => res.json())
      .then(data => {
        console.log(data)
        const icon = data.weather[0].icon;
        setIcon(`https://openweathermap.org/img/wn/${icon}@2x.png`);

        const temp = Math.round(data.main.temp)
        setTemp(temp)

        const feels = Math.round(data.main.feels_like)
        setFeels(feels)
      });
  }, []);

  return (
      <>
          <div className={styles.cloudysCard}>
            <div className={styles.cardTitle}>Today</div>
            <img className={styles.cloudyCard} src={icon}/>
            <div className={styles.temperatureNow}><span className={styles.temperatureNowSpan}>Now:</span>{temp}°C</div>
            <div className={styles.temperature}>{`${feels}°C - ${temp}°C`} </div>
            <div className={styles.temperatureDescription}>
            </div>
          </div> 
      </>
  )
}
