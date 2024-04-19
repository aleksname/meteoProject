// file: index.jsx
// import styles from '../../../styles/App.module.scss'
import '../styles/App.module.scss'
import Header from './components/Header/Header'
import Main from './components/Main/MainPage'
import SliderWeatherCard from './components/SliderWeatherCard/SliderWeatherCard';
import MainContainter from './components/MainContainter';
import WeatherCard from './components/SliderWeatherCard/WeatherCard';

export default function Page({titels}) {
  return(
    <>
      <MainContainter titels='Home page'>
          <div className="wrapper">
            {/* <Header/> */}
            <Main />
          <SliderWeatherCard />
          </div>
      </MainContainter>
      </>
  )
}

{/* <h1 className={styles.title}>Hello, Next.js!</h1> */}