// file: index.jsx
import styles from '../styles/App.module.scss'
import Main from './components/Main/MainPage'
import SliderWeatherCard from './components/SliderWeatherCard/SliderWeatherCard';
import MainContainter from './components/MainContainter';
import SponsoredNews from './components/SponsoredNews/SponsoredNews';

export default function Page() {
  return(
    <>
      {/* <AuthProvider/> */}
      <MainContainter titels='Home page'>
          <div className={styles.wrapper}>
            {/* <Header/> */}
            <Main />
            <SliderWeatherCard />
            <SponsoredNews />
          {/* <GetApiData/>   */}
        </div>
      </MainContainter>
      </>
  )
}
