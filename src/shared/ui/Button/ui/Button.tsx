import styles from './Button.module.scss'
import React, {CSSProperties} from 'react'
interface ButtonProps {
    children: React.ReactNode;
    style?: CSSProperties;
    type: 'white' | 'red';
}
const Button = ({children, style, type} : ButtonProps) => {
    return (
        <div className={styles.wrapper}>
            {type === 'white' ? <button className={styles.white_button} style={style}>
                {children}
            </button> : <button className={styles.red_button} style={style}>
                {children}
            </button>}

        </div>
    )
}
export default Button