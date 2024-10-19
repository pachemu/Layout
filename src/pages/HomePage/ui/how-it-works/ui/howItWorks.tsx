import styles from './HowItWorks.module.scss'
import Background from '@/shared/assets/howItWorks/Background.svg'
import Chats from '@/shared/assets/howItWorks/Chats.svg'
import Payments from '@/shared/assets/howItWorks/Payments.svg'
import Orders from '@/shared/assets/howItWorks/Orders.svg'
import Button from "@/shared/ui/Button/ui/Button";
import Shines_Orders from '@/shared/assets/howItWorks/Shines_Orders.svg'
import Shines_Chats from '@/shared/assets/howItWorks/Shines_Chats.svg'
import Shines_Payments from '@/shared/assets/howItWorks/Shines_Payments.svg'
import ToLeft from '@/shared/assets/howItWorks/toLeft.svg'
import ToRight from '@/shared/assets/howItWorks/toRight.svg'


const howItWorks = () => {
    return (
        <section className={styles.howItWorks}>
            <Background className={styles.howItWorks_background}/>
            <div className={styles.howItWorks__block}>
                <div className={`${styles.howItWorks__block_item} ${styles.howItWorks__block_item_Chats}`}>
                    <Shines_Chats className={styles.shines_Chats}/>
                    <Chats className={styles.howItWorks__block_item_svg_chats}/>
                    <h3 className={styles.howItWorks__block_item_title}>Chats</h3>
                    <div className={styles.howItWorks__block_item_description}>Connect to anyone in your supply chain
                        and exchange messages
                    </div>
                </div>
                <div className={`${styles.howItWorks__block_item} ${styles.howItWorks__block_item_Orders}`}>
                    <ToRight className={styles.howItWorks__block_toRight}/>
                    <Shines_Orders className={styles.shines_Orders}/>
                    <Orders className={styles.howItWorks__block_item_svg_orders}/>
                    <h3 className={styles.howItWorks__block_item_title}>Orders</h3>
                    <div className={styles.howItWorks__block_item_description}>Create or confirm purchase orders with
                        tap of a button
                    </div>
                </div>
                <div className={`${styles.howItWorks__block_item} ${styles.howItWorks__block_item_Payments}`}>
                    <ToLeft className={styles.howItWorks__block_toLeft}/>
                    <Shines_Payments className={styles.shines_Payments}/>
                    <Payments className={styles.howItWorks__block_item_svg_payments}/>
                    <h3 className={styles.howItWorks__block_item_title}>Payments</h3>
                    <div className={styles.howItWorks__block_item_description}>Send invoices and reconcile payments in
                        one dashboard
                    </div>
                </div>
            </div>
            <div className={styles.howItWorks__checkOut}>
                <h1 className={styles.howItWorks__checkOut_title}></h1>
                <div className={styles.howItWorks__checkOut_description}>
                </div>
                <Button type={"white"} style={{width: '220px'}}>
                    &#9654; Play Video
                </Button>
            </div>
        </section>
    )
}

export default howItWorks