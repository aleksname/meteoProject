import styles from '../../styles/App.module.scss';

const Loading = () => {
    return (
        <div className={styles.loadingContainer}>
            <div className={styles.loadingAnimation}></div>
        </div>
    );
};

export default Loading;
