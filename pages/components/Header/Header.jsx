import logo from '../img/header/Logo.png'
import Image from 'next/image'
import styles from '../../../styles/App.module.scss'
import HeaderNav from './HeaderNav'
import HeaderSetting from './HeaderSetting';

export default function () {
    return (
        <>
            <div className={styles.headerBlock}>
                <div className={styles.logoBlock}>
                    <Image src={logo} className={styles.logo} alt="logotipe"/>
                    <div className={styles.title}>My<span className={styles.titleSpan}>Clima</span></div>
                </div>
                <HeaderNav />
                <HeaderSetting/>
            </div>
        </>
    )
}