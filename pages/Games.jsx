import MainContainter from "./components/MainContainter"
import styles from '../styles/App.module.scss'
import Background from './components/img/GamesCard/backgroundGamesPage.png'
import Image from "next/image"
import GamesCardArea from './components/GamesCardComponents/GamesCardArea';

export default function Games({titels}) {
    return (
        <>
            <MainContainter titels={titels = 'Games page'} >
                <div className={styles.gamesPageBlock}>
                    <Image src={Background}  className={ styles.pageBackground} />
                    <GamesCardArea/>
                </div>
            </MainContainter>
        </>
    )
}
