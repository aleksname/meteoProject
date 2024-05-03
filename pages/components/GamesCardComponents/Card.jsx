import styles from '../../../styles/App.module.scss'
import Image from 'next/image'

export default function Card({ item, id, handleClick }) {
    
    const itemClass = item.stat ? ' active ' + item.stat : ""

    return (
        <>
            <div className={styles['gameCard' + itemClass]} onClick={() => handleClick(id)}>
                <Image src={item.img} alt={item.id} width={100} height={100} className={styles.cardImage} />
            </div>
        </>
    )
} 