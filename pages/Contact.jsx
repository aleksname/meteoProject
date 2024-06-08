// pages/contact.js
import Image from 'next/image';
import MainContainter from './components/MainContainter';
import ContactImg from './components/img/ContactPage/contactSectionImg.png';
import styles from '../styles/App.module.scss';
import ContactPageInput from './components/ContactPageInput/ContactPageInput';
import logoAside from './components/img/header/Logo.png';

export default function Contact() {
  return (
    <>
      <MainContainter titels="Contact Page">
        <div className={styles.contactPageBlock}>
          <div className={styles.article}>
            <Image src={ContactImg} className={styles.articleImg} />
          </div>
          <div className={styles.aside}>
            <div className={styles.asideLogoBlock}>
              <Image src={logoAside} className={styles.logoAside} />
              <h2 className={styles.asideLogo}>MyClima</h2>
            </div>
            <div className={styles.asideSubTitle}>
              Розкажіть нам, що ви думаєте про цей сайт
            </div>
            <ContactPageInput />
          </div>
        </div>
      </MainContainter>
    </>
  );
}
