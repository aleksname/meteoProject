import styles from '../../../styles/App.module.scss'
import Image from 'next/image'

export default function Card({ item }) {
    return (
        <>
            <div className={styles.gameCard}>
                <Image src={item.img} alt={item.id} width={30} height={30} className={styles.cardImage} />
            </div>
        </>
    )
}
