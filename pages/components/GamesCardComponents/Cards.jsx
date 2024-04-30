import styles from '../../../styles/App.module.scss'
import { useState } from 'react';
import Card from './Card';

export default function Cards() {
    const [items, setItems] = useState([
        { id: 1, img: '/meteo/pages/components/img/GamesCard/cardIcon1.png', stat: ''},
        { id: 1, img: '/meteo/pages/components/img/GamesCard/cardIcon1.png', stat: ''},
    ])
    return (
        <>
            <div className={styles.containers}>
                {items.map((item, index) => (
                    <Card key={index} item={item} />
                ))}
            </div>
        </>
    )
}