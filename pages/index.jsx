// file: index.jsx
// import styles from '../../../styles/App.module.scss'
import '../styles/App.module.scss'
import Main from './components/Main/MainPage'
import SliderWeatherCard from './components/SliderWeatherCard/SliderWeatherCard';
import MainContainter from './components/MainContainter';
import SponsoredNews from './components/SponsoredNews/SponsoredNews';
import Footer from './components/Footer/Footer';
import GetApiData from './components/GetApiData/GetApiData'

export default function Page({titels}) {
  return(
    <>
      <MainContainter titels='Home page'>
          <div className="wrapper">
            {/* <Header/> */}
            <Main />
            <SliderWeatherCard />
            <SponsoredNews />
            <Footer />
            <GetApiData/>  
        </div>
      </MainContainter>
      </>
  )
}

{/* <h1 className={styles.title}>Hello, Next.js!</h1> */}