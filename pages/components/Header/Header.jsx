import logo from '../img/header/Logo.png'
import styles from '../../../styles/App.module.scss'

export default function () {
    return (
        <>
            <div className={styles.headerBlock}>
                <img src={logo} alt="Logotipe" className="headerLogo" />
                <div className="headerTitle">My <span>Clima</span></div>
            </div>
        </>
    )
}