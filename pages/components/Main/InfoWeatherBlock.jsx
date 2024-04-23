import Image from 'next/image';
import styles from '../../../styles/App.module.scss'
import windIcon from '../img/main/32/Wind/outline.png'
import tempIcon from '../img/main/32/Temperature/temperature_fill.png'
import rainIcon from '../img/main/32/Rain/outline.png'
import humidityIcon from '../img/main/32/Humidity/outline.png'
import pressur from '../img/main/32/Pressure/thermometer.png'
import Api from '../GetApiData/GetApiData';
import { useState } from 'react';
import { useEffect } from 'react';

export default function InfoWeatherBlock() {
  const [temperatures, setTemperatures] = useState(null);
  const [wind, setWind] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [rain, setRain] = useState(null);
  const [pressure, setPressure] = useState(null);

  useEffect(() => {
    fetch("https://api.openweathermap.org/data/2.5/weather?lat=48.748718&lon=30.221500&units=metric&appid=28cf33db8bb5ca1ba332099cbea140c1")
      .then(res => res.json())
      .then(data => {
        console.log(data)
        const temp = Math.round(data.main.temp);
        setTemperatures(temp);

        const windSpeed = Math.round(data.wind.speed);
        setWind(windSpeed);

        const humidity = Math.round(data.main.humidity);
        setHumidity(humidity);
        
        const rain = Math.round(data.main.rain);
        setRain(rain);

        const pressure = Math.round(data.main.pressure);
        setPressure(pressure);
        console.log(data)
      });
  }, []);

  return(
    <>
      <div className={styles.infoWeatherBlock}>
        <div className={styles.weatherCards}>
          <Api text='Wind  ' icon={windIcon} value={`${wind} m/s`} />
          <Api text='Rain ' icon={rainIcon} value={`${rain}%`} />
          <Api text='Temp ' icon={tempIcon} value={`${temperatures}°C`} />
          <Api text='Humidity ' icon={humidityIcon} value={`${humidity}%`} />
          <Api text='Pressure:' icon={pressur} value={`${pressure}%`} />
        </div>    
      </div>
    </>
  )
}
