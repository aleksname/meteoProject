import { useState, useEffect } from 'react';
import MainContainter from './components/MainContainter';
import styles from '../styles/App.module.scss';
import Link from 'next/link';

export default function Random() {
    const [spinning, setSpinning] = useState(false);
    const [rotation, setRotation] = useState(0);
    const [randomData, setRandomData] = useState([]);

    const data = ['Єгор', 'Софія', 'Аміна', 'Артем', 'Алан та Вєлат', 'Item 6', 'Item 7', 'Item 8'];

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    useEffect(() => {
        const shuffledData = shuffleArray([...data]);
        setRandomData(shuffledData.slice(0, 8)); // Вибрати перші 8 елементів після перемішування
    }, []);


    return (
        <>
            <MainContainter titels={'Random page'}>
                <div className={styles.randomBlock}>
                    <nav className={styles.navRandomPages}>
                        <Link href='Random' className={styles.linkRandom}>Random color</Link>
                        <Link href='Spin' className={styles.linkRandom}>Spin</Link>
                    </nav>

                    <div className={styles.randomBlockArea}>
                        <ul className={styles.randomUl}>
                            {randomData.map((item, index) => (
                                <li key={index} className={styles.randomLi}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </MainContainter>
        </>
    );
}
