import MainContainter from './components/MainContainter';
import styles from '../styles/App.module.scss';
import SpinSliders from './components/SpinSlider/SpinSlider';
import WheelOfFortune from './components/SpinSlider/WheelOfFortune';

export default function Random() {

    return (
        <>
            <MainContainter titels={'Random page'} >
                <div className={styles.spinBlock}>
                    <div className={styles.spinBlockArea}>
                        <strong className={styles.randomTitle}>Що ж, ось моє останнє повідомлення для вас, і я поясню, що означають ваші кольори.
                            <p  className={styles.randomTitleSpan}>
                                Давайте разом дізнаємося, який колір належить саме вам!
                            </p>
                                <p className={styles.randomTitleSpan}>
                                    Чарівництво починається!  &#10552;
                                </p> 
                        </strong>
                        <p className={styles.randomTitle}></p>
                    </div>
                    <SpinSliders />
                <WheelOfFortune />
                </div>
            </MainContainter>
        </>
    );
}
