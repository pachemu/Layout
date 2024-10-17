import styles from './LanguageSwitcher.module.scss';
import Chine from '@/shared/assets/header/flags/CH.svg';
import English from '@/shared/assets/header/flags/EN.svg';
import Monaco from '@/shared/assets/header/flags/MON.svg';
import Un from '@/shared/assets/header/flags/UN.svg';
import React, {useState} from "react";

interface flag {
    svg: JSX.Element;
    name: string
}
interface Props {
    className : string;
}
const LanguageSwitcher = ({className} : Props) => {

    const flags : flag[] = [
        {
            svg: <English/>,
            name: 'EN'
        },
        {
            svg: <Monaco/>,
            name: 'MN'
        },
        {
            svg: <Un/>,
            name: 'UN'
        },
        {
            svg: <Chine/>,
            name: 'CH'
        }
    ]
    const [isOpen, setOpen] = useState<boolean>(false)
    const [currentFlag, setCurrentFlag] = useState<flag>({svg: <English/>, name: 'EN'})

    const toggleModal = () => {
        setOpen(!isOpen);
    };

    return (
        <div className={`${styles.container} ${className}`}>
            <div onClick={toggleModal} className={styles.trigger}>
                {currentFlag.name}
                <span className={`${styles.arrow} ${isOpen ? styles.arrow_enabled : styles.arrow_disabled}`}></span>
            </div>
            {isOpen && (
                <dialog className={styles.dropdown} open={isOpen}>
                    <div className={styles.dropdown__items}>
                        {flags.map((country) => {
                            return (
                                <div className={styles.dropdown__items_item} onClick={() => setCurrentFlag(country)}>
                                    {country.svg}
                                </div>
                            )
                        })}
                    </div>
                </dialog>
            )}
        </div>
    );
};

export default LanguageSwitcher;