import MainContainter from './components/MainContainter';
import styles from '../styles/App.module.scss';
import SpinSliders from './components/SpinSlider/SpinSlider';

export default function Random() {

    return (
        <>
            <MainContainter titels={'Random page'}>
                <div className={styles.spinBlock}>
                    <div className={styles.spinBlockArea}>
                        <strong className={styles.randomTitle}>Що ж, ось моє останнє повідомлення для вас, і я поясню, що означають ваші кольори та як вони визначають порядок здачі ваших робіт на колесі фортуни.
                            <p  className={styles.randomTitleSpan}>
                                Давайте разом дізнаємося, який колір належить саме вам! Приготуйтеся до магічної подорожі, де колесо фортуни розкриє ваш колір долі та порядок здачі ваших робіт. Чарівництво починається!
                                &#10552;
                            </p>
                        </strong>
                        <p className={styles.randomTitle}></p>
                    </div>
                </div>
                <SpinSliders/>
            </MainContainter>
        </>
    );
}
