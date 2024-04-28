import Image from 'next/image'
import MainContainter from './components/MainContainter';
import ContactImg from './components/img/ContactPage/contactSectionImg.png'
import styles from '../styles/App.module.scss'
import logo from './components/img/header/Logo.png'
import ContactPageInput from './components/ContactPageInput/ContactPageInput';

export default function Contact({titels}) {
  return(
    <>
      <MainContainter titels="Contact Page">
        
        <div className={styles.contactPageBlock}>
          <div className={styles.article}>
            <Image src={ContactImg} className={ styles.articleImg} />
          </div>
          <div className={styles.aside}>
              <div className={styles.asideSubTitle}>
                Tell us what
                you think about
                this site
              </div>
            <ContactPageInput />
            <button className={styles.asideBtn}>Submit</button>
          </div>
           
        </div>
      </MainContainter>
      </>
  )
  
}
