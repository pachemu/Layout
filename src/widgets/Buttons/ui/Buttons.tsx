import styles from './Buttons.module.scss'
const Buttons = () => {
    return (
        <div className={styles.block}>
            <button className={styles.block_button}>
                Chats
            </button>
            <button className={styles.block_button}>
                Orders
            </button>
            <button className={styles.block_button}>
                Payments
            </button>
        </div>
    )
}

export default Buttons