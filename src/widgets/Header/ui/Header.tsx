import styles from './Header.module.scss'
import Button from '../../../shared/ui/Button/ui/Button';
import {NavLink} from 'react-router-dom';
import Logo from '@/shared/assets/Logo.svg'
import Tinvio from '@/shared/assets/Tinvio.svg'
import BurgerButton from "@/widgets/Header/ui/BurgerButton/ui/BurgerButton";
import {useState} from "react";

const Header = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <header className={styles.header}>
            <div className={styles.container} style={{paddingTop: '20px'}}>
                <div className={styles.container_inner_logo}>
                    <span className={styles.logo}><Logo width={"50"} height={"44"}/></span>
                    <span className={styles.logo}><Tinvio/></span>
                </div>
                <nav className={`${styles.hidden_mobile} ${styles.nav} ${styles.list}`}>
                    <ul className={`${styles.list} `}>
                        <li>
                            <NavLink to={''} className={({isActive, isPending}) =>
                                [
                                    isPending ? "pending" : "",
                                    isActive ? styles.active : "",
                                ].join(" ")
                            }>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/features'}>Features</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/company'}>Company</NavLink>
                        </li>
                    </ul>
                    <div className={styles.nav_button_container}>
                        <Button type={'white'}>
                            Get started
                        </Button>
                    </div>
                </nav>
            </div>
            <div className={styles.wrapper_burger_button}>
                <BurgerButton setOpen={setOpen} isOpen={isOpen}/>
            </div>
        </header>
    )
}

export default Header