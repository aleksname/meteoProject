import styles from '../../../styles/App.module.scss'

export default function ContactPageInput() {
    return (
        <>
            <div className={styles.inputBlock}>
                <div className={styles.inputBlock}>
                    <input type="text" placeholder="Full Name" className={ styles.input} />
                </div>
                <div className={styles.inputBlock}>
                    <input type="text" placeholder="Phone Number" className={ styles.input}/>
                </div>
                <div className={styles.inputBlock}>
                    <input type="text" placeholder="Your Email addres" className={ styles.input}/>
                </div>
                <div className={styles.inputBlock}>
                    <input type="text" placeholder="Message to us" className={ styles.inputMessage} maxLength={5000}/>
                </div>
            </div>
        </>
    )
}