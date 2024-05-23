import { useState, useEffect } from 'react';
import MainContainter from './components/MainContainter';
import Loading from './components/Loading'; // імпорт компонента Loading
import styles from '../styles/App.module.scss';
import Link from 'next/link';

export default function Random() {
    const [isLoading, setIsLoading] = useState(true); // стан для контролю анімації завантаження
    const [randomData, setRandomData] = useState([]);

    const data = ['Єгор', 'Софія', 'Аміна', 'Артем', 'Алан та Вєлат'];

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    useEffect(() => {
        const shuffledData = shuffleArray([...data]);
        setRandomData(shuffledData.slice(0, 6)); // Вибрати перші 6 елементів після перемішування

        const timer = setTimeout(() => {
            setIsLoading(false); // вимкнути анімацію після 4-5 секунд
        }, 4000);

        return () => clearTimeout(timer); // очистити таймер при демонтажі компонента
    }, []);

    if (isLoading) {
        return <Loading />; // показати анімацію завантаження, поки isLoading true
    }

    return (
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
    );
}
