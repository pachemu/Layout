import styles from './homeBlock.module.scss'
import Button from "../../../../../shared/ui/Button/ui/Button";
import BigRectangles from '@/shared/assets/homeBlock/BigRectangles.svg'
import RedRectangle from '@/shared/assets/homeBlock/RedRectangle.svg'
import FullRedRectangle from '@/shared/assets/homeBlock/FullRedRectangle.svg'
import SmallRectangles from '@/shared/assets/homeBlock/SmallRectangle.svg'
import MobileScreenshot from '@/shared/assets/homeBlock/MobileScreenshot.svg'
import Screenshot from '@/shared/assets/homeBlock/Screenshot.svg'
import Smile from '@/shared/assets/homeBlock/Smile.svg'

const HomeBlock = () => {
    return (
        <section>
            <div className={styles.wrapper}>
                <div className={styles.wrapper__block}>
                    <div className={styles.wrapper__block_title}>
                        <h2 className={styles.wrapper__block_title}>
                            Collecting payments
                            <div className={styles.active}>
                                is easy
                                <span className={styles.active_end}>, right?</span>
                            </div>
                        </h2>
                    </div>
                    <div className={styles.wrapper__block_description}>
                        <span className={styles.wrapper__block_description_first}>Manage all your supply chain transactions in one dashboard.</span>

                        <span className={styles.wrapper__block_description_second}>Get paid faster, reconcile quicker, grow bigger</span>

                    </div>
                    <div className={styles.wrapper__block_button}>
                        <Button type={'red'}>Get Started Now</Button>
                    </div>
                    <div className={styles.wrapper__block_barker}>
                        It's free to try! <span><Smile/></span>
                    </div>
                </div>
                <div className={styles.wrapper__background}>
                    <RedRectangle className={styles.wrapper__background_svg_firstRectangle}/>
                    <FullRedRectangle className={styles.wrapper__background_svg_secondRectangle}/>
                    <SmallRectangles className={styles.wrapper__background_svg_thirdRectangles}/>
                    <BigRectangles className={styles.wrapper__background_svg_fourthRectangles}/>
                    <MobileScreenshot className={styles.wrapper__background_svg_screenshot_mobile}/>
                    <Screenshot className={styles.wrapper__background_svg_screenshot}/>
                </div>
            </div>
        </section>
    )
};
export default HomeBlock;
