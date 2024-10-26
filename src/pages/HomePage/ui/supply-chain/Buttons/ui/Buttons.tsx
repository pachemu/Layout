import styles from './Buttons.module.scss'
import Objects from "@/pages/HomePage/ui/supply-chain/types/types";
import {useEffect, useState} from "react";

type Props = {
    setMain: any,
    options: Objects[],
    main: Objects
}
const Buttons = ({setMain, options, main}: Props) => {
    const [activeButton, setActiveButton] = useState(main);

    useEffect(() => {
        setActiveButton(main);
    }, [main]);
    return (
        <div className={styles.block}>
            {options.map((item) => (
                <button
                    key={item.text}
                    onClick={() => setMain(item)}
                    className={`${styles.block_button} ${main === item ? styles.block_button_active : ''}`}>
                    {item.name}
                </button>
            ))}
        </div>
    )
}

export default Buttons