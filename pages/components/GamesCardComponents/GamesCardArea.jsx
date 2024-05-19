import styles from '../../../styles/App.module.scss'
import Cards from './Cards'

export default function GamesCardArea() {
    return (
        <>
            <div className={styles.gamesCardArea}>
                <div className={styles.cardAreaWrapper}>
                    <div className={styles.areaBg}>
                        <div className={styles.areaCardsBlock}>
                            <Cards/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}