import styles from './Footer.module.scss'
import Logo from '@/shared/assets/Logo.svg'
import Tinvio from '@/shared/assets/Tinvio.svg'
import Copyright from '@/shared/assets/footer/Copyright.svg'
import Inline from '@/shared/assets/footer/inLine.svg'
import Instagram from '@/shared/assets/footer/Instagram.svg'
import Play from '@/shared/assets/footer/AvailableOnPlay.svg'
import Store from '@/shared/assets/footer/AvailableOnStore.svg'

const Footer = () => {
    return (
        <section className={styles.footer}>
            <div className={styles.footer_main}>
                <div className={styles.footer_main_nav}>
                    <span className={styles.footer_main_nav_logo}>
                       <Logo/>
                        <Tinvio/>
                    </span>
                    <div className={styles.footer_main_nav_links}>
                        <span>Home</span>
                        <span>Features</span>
                        <span>Company</span>
                        <span>Login</span>
                    </div>
                </div>
                <div className={styles.footer_main_links}>
                    <div className={styles.footer_main_links_half}>
                        <Inline/>
                        <Instagram/>
                    </div>
                    <div className={`${styles.footer_main_links_half} ${styles.footer_main_links_half_2}`}>
                        <Play/>
                        <Store/>
                    </div>
                </div>
            </div>
            <div className={styles.footer_copyright}>
                <span>
                    © Tinvio™ 2020. All Rights Reserved
                </span>
                <div className={styles.footer_copyright_half}>
                    <div>
                        Privacy Policy
                    </div>
                    <div>
                        Terms of Service
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Footer