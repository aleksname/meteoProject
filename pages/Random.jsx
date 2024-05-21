import { useState } from 'react';
import MainContainter from './components/MainContainter';
import styles from '../styles/App.module.scss';
import Link from 'next/link';

export default function Random() {
    const [spinning, setSpinning] = useState(false);
    const [rotation, setRotation] = useState(0);

    const handleClick = () => {
        const additionalRotation = Math.floor(Math.random() * 360) + 1440; // 4+ оберти та випадковий кут
        setRotation(prevRotation => prevRotation + additionalRotation);
        setSpinning(true);
        setTimeout(() => {
            setSpinning(false);
        }, 4000); // тривалість анімації
    };

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
                                <li className={styles.randomLi}></li>
                                <li className={styles.randomLi}></li>
                                <li className={styles.randomLi}></li>
                                <li className={styles.randomLi}></li>
                                <li className={styles.randomLi}></li>
                                <li className={styles.randomLi}></li>
                                <li className={styles.randomLi}></li>
                                <li className={styles.randomLi}></li>
                            </ul>
                    </div>
                </div>
            </MainContainter>
        </>
    );
}
