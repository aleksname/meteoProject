import styles from '../../../styles/App.module.scss'
import logo from '../img/header/Logo.png'
import Image from 'next/image'  
import iconTg from '../img/footer/tgIcon.png'
import iconIn from '../img/footer/inIcon.png'
import iconGh from '../img/footer/ghIcon.png'
import iconDs from '../img/footer/dsIcon.png'
import Link from 'next/link'

export default function Footer() {
    return (
        <>
            <div className={styles.footerContentBlocks}>
                <div className={styles.footerContentBlock}>
                <div className={styles.footerLogotipe}>
                    <div className={styles.logoBlockFooter}>
                        <Image src={logo} className={styles.logoFooter} alt="logotipe"/>
                        <div className={styles.titleFooter}>My<span className={styles.titleSpan}>Clima</span></div>
                    </div>
                </div>
                    <div className={styles.contactInfo}>
                    <div className={styles.contentReserv}>© 2024 MyClima. All rights reserved</div>
                        <div className={styles.contentSocial}>
                            <Image src={iconTg} className={styles.icon}></Image>
                            <Image src={iconIn} className={styles.icon}></Image>
                            <Image src={iconGh} className={styles.icon}></Image>
                            <Image src={iconDs} className={styles.icon}></Image>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}