// file: index.jsx
import '../styles/App.module.scss'
import Main from './components/Main/MainPage'
import SliderWeatherCard from './components/SliderWeatherCard/SliderWeatherCard';
import MainContainter from './components/MainContainter';
import SponsoredNews from './components/SponsoredNews/SponsoredNews';
import {AuthProvider} from './auth'

export default function Page({ titels }) {
  return(
    <>
      {/* <AuthProvider/> */}
      <MainContainter titels='Home page'>
          <div className="wrapper">
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
