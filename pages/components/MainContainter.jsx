import Head from 'next/head'
import styles from '../../../meteo/styles/App.module.scss'
import HeaderNav from './Header/HeaderNav'
import HeaderSetting from './Header/HeaderSetting'
import logo from './img/header/Logo.png'
import Image from 'next/image'  

export default function MainContainter({ children, keywords, titels }) {
  return(
    <>
      <Head>
        <meta keywords={"nextjs, alexname main page" + keywords}></meta>
              <title>{ titels}</title>
          </Head>
           <div className={styles.headerBlock}>
                <div className={styles.logoBlock}>
                    <Image src={logo} className={styles.logo} alt="logotipe"/>
                    <div className={styles.title}>My<span className={styles.titleSpan}>Clima</span></div>
                </div>
                <HeaderNav />
        <HeaderSetting />
          </div>
      <div>{ children}</div>
    </>
  )
}
