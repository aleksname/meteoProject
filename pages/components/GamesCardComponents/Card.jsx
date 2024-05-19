import styles from '../../../styles/App.module.scss';
import { useState } from 'react';

export default function Card({ item, id, handleClick }) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleCardClick = () => {
        setIsFlipped(!isFlipped);
        handleClick(id);
    };

    return (
        <div className={`${styles.gameCard} ${isFlipped ? styles.active : ''}`} onClick={handleCardClick}>
            <img src={isFlipped ? item.img : ''} className={styles.cardImage}  />
        </div>
    );
}
