import styles from './Smile.module.scss'
import {firstHalf, secondHalf} from "@/pages/HomePage/ui/smile-on/ui/const/const";
import Smile from '@/shared/assets/smileOn/Smile.svg'

const SmileOn = () => {
    return (
        <section className={styles.block}>
            <h1 className={styles.block_title}>
                We'll put a smile on your supply chain
            </h1>
            <div className={styles.block_of_svg}>
                <div className={styles.block_of_svg_first_half_of_svg}>
                    {firstHalf.map((Item, index) => (
                        <div className={`${styles.block_of_svg_default} ${styles.block_of_svg_first_half_of_svg + `_${index}`}`}>
                            <Item className={`${styles.block_of_svg_first_half_of_svg+ `_${index}` + `_logo`} `}/>
                        </div>
                    ))}
                </div>
                <h2 className={styles.block_of_svg_title}>
                    <span className={styles.block_of_svg_title_number}>
                        5000+
                    </span>
                    <span className={styles.block_of_svg_description}>
                        happy businesses
                    </span>
                    <Smile className={styles.block_of_svg_smile}/>
                </h2>
                <div className={styles.block_of_svg_second_half_of_svg}>
                    {secondHalf.map((Item, index) => (
                        <div className={`${styles.block_of_svg_default}  ${styles.block_of_svg_second_half_of_svg + `_${index}`}  `}>
                            <Item className={`${styles.block_of_svg_second_half_of_svg + `_${index}` + `_logo`} `}/>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SmileOn