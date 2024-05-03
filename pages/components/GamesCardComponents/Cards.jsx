import styles from '../../../styles/App.module.scss'
import { useState } from 'react';
import Card from './Card';

export default function Cards() {
    const [items, setItems] = useState([
        { id: 1, img: '/img/cardIcon1.png', stat: ''},
        { id: 1, img: '/img/cardIcon1.png', stat: ''},
        { id: 2, img: '/img/cardIcon2.png', stat: ''},
        { id: 2, img: '/img/cardIcon2.png', stat: ''},
        { id: 3, img: '/img/cardIcon3.png', stat: ''},
        { id: 3, img: '/img/cardIcon3.png', stat: ''},
        { id: 4, img: '/img/cardIcon4.png', stat: ''},
        { id: 4, img: '/img/cardIcon4.png', stat: ''},
        { id: 5, img: '/img/cardIcon5.png', stat: ''},
        { id: 5, img: '/img/cardIcon5.png', stat: ''},
        { id: 6, img: '/img/cardIcon6.png', stat: ''},
        { id: 6, img: '/img/cardIcon6.png', stat: ''},
        { id: 7, img: '/img/cardIcon7.png', stat: ''},
        { id: 7, img: '/img/cardIcon7.png', stat: ''},
        { id: 8, img: '/img/cardIcon8.png', stat: ''},
        { id: 8, img: '/img/cardIcon8.png', stat: ''},
    ].sort(() => Math.random() - 0.5))

    const [prev, setPrev] = useState(-1)

    function handleClick(id) {
    setItems(prevItems =>
        prevItems.map((item, index) => {
            if (index === id) {
                return { ...item, stat: item.stat === 'active' ? '' : 'active' };
            }
            return item;
        })
    );
}


    return (
        <>
            <div className={styles.containers}>
                {items.map((item, index) => (
                    <Card key={index} item={item} id={index} handleClick={handleClick} className={styles[item.stat]}/>
                ))}
            </div>
        </>
    )
}