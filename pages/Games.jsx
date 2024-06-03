import MainContainter from "./components/MainContainter"
import styles from '../styles/App.module.scss'
import GamesCardArea from './components/GamesCardComponents/GamesCardArea';

export default function Games({titels}) {
    return (
        <>
            <MainContainter titels={titels = 'Games page'} >
                <div className={styles.gamesPageBlock}>
                    <GamesCardArea/>
                </div>
            </MainContainter>
        </>
    )
}
