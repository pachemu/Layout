import Rectangle from '@/shared/assets/supplyChain/littleRectangle.svg'
import styles from './Features.module.scss'
interface Props {
    array: string[];
}

const Features = ({array} : Props) => {
    return (
        <div className={styles.block}>
            {array.map((item) =>
                <div className={styles.block_item}>
                    <Rectangle className={styles.block_item_rectangle}/>
                    <span className={styles.block_item_text}>{item}</span>
                </div>

            )}
        </div>
    )
}

export default Features