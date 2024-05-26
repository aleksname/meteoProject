import { useState, useEffect } from 'react';
import MainContainter from './components/MainContainter';
import styles from '../styles/App.module.scss';
import Link from 'next/link';

export default function Random() {
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
    }, []);

    return (
        <MainContainter titels={'Random page'}>
            <div className={styles.randomBlock}>
                {/* <nav className={styles.navRandomPages}>
                    <Link href='Random' className={styles.linkRandom}>Random color</Link>
                    <Link href='Spin' className={styles.linkRandom}>Spin</Link>
                </nav> */}

                <div className={styles.randomBlockArea}>
                        <strong className={styles.randomTitle}>Я - старий чаклун із далекої чарівної країни. Сьогодні до мене долетів магічний сигнал, і він розповів мені дещо неймовірне про кожного з вас. Кожен із вас має свій особливий колір, який супроводжує вас у житті та надає вам сили та натхнення. Цей колір - частина вашої природи, вашого внутрішнього світу.
                            {/* <p  className={styles.randomTitleSpan}>
                                Давайте разом дізнаємося, який колір належить саме вам! Приготуйтеся до магічної подорожі, де колесо фортуни розкриє ваш колір долі та порядок здачі ваших робіт. Чарівництво починається!
                            </p> */}
                            <h2 className={styles.randomTitle2}>Ось ваші кольори &#10552;</h2>
                        </strong>
                    <p className={styles.randomTitle}></p>
                    <ul className={styles.randomUl}>
                        {randomData.map((item, index) => (
                            <li key={index} className={styles.randomLi}>
                                {item}
                            </li>
                        ))}
                    </ul>
                    <Link href='Spin' className={styles.linkRandom}>&#10553;Почати пригоду</Link>
                </div>
            </div>
        </MainContainter>
    );
}
