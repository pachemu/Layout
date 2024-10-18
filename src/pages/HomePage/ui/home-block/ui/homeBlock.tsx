import styles from './homeBlock.module.scss'
import Button from "../../../../../shared/ui/Button/ui/Button";
import BigRectangles from '@/shared/assets/homeBlock/BigRectangles.svg'
import RedRectangle from '@/shared/assets/homeBlock/RedRectangle.svg'
import FullRedRectangle from '@/shared/assets/homeBlock/FullRedRectangle.svg'
import SmallRectangles from '@/shared/assets/homeBlock/SmallRectangle.svg'
import MobileScreenshot from '@/shared/assets/homeBlock/MobileScreenshot.svg'
import Screenshot from '@/shared/assets/homeBlock/Screenshot.svg'
import Smile from '@/shared/assets/homeBlock/Smile.svg'
import MobileRedRectangle from '@/shared/assets/homeBlock/RedRectangleMobile.svg'
import MobileFullRedRectangle from '@/shared/assets/homeBlock/FullRedRectangleMobile.svg'
import Shines from '@/shared/assets/homeBlock/Shines.svg'
import UseDeviceDetect from "@/shared/lib/hooks/UseDeviceDetect";

const HomeBlock = () => {
    const { isMobile } = UseDeviceDetect();
    // Ниже представлен юзлесс код который я мог бы заменить одними миксинами в css но я забыл про дефолт значение ширины и высоты свгшок и накалякал эту хуйню, если что я умный
    // просто иногда долбаеб.
    const MobileScreenshots = {
        FullRedRectangle : MobileFullRedRectangle,
        RedRectangle: MobileRedRectangle
    }
    const BasicScreenshotes = {
        FullRedRectangle : FullRedRectangle,
        RedRectangle: RedRectangle
    }
    const selectedScreenshots = isMobile ? MobileScreenshots : BasicScreenshotes
    return (
        <section>
            <div className={styles.wrapper}>
                <div className={styles.wrapper__block}>
                    <div className={styles.wrapper__block_title}>
                        <h2 className={styles.wrapper__block_title}>
                            <Shines className={styles.wrapper__block_title_shines}/>
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
                    <selectedScreenshots.RedRectangle className={styles.wrapper__background_svg_firstRectangle}/>
                    <selectedScreenshots.FullRedRectangle className={styles.wrapper__background_svg_secondRectangle}/>
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
