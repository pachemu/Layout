import styles from "@/widgets/Header/ui/BurgerButton/ui/BurgerButton.module.scss";
import {NavLink} from "react-router-dom";
import Button from "@/shared/ui/Button/ui/Button";

interface Props {
    setOpen: any,
    isOpen: boolean,
}

const BurgerButton = ({setOpen, isOpen}: Props) => {
    const toggleModal = () => {
        setOpen(!isOpen);
    }
    return (

        <div className={styles.visually_hidden}>
            <button onClick={toggleModal} className={`${isOpen ? styles.cross_button : styles.burger_button}`}>
            </button>
            <dialog open={isOpen} className={`${styles.mobile_overlay} ${isOpen ? '' : styles.false}`} id='mobileOverlay'>
                <nav className={styles.mobile_overlay__nav}>
                    <ul className={styles.mobile_overlay__nav_list}>
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
                    <div className={styles.button_container}>
                        <Button type={'red'}>
                            Get started
                        </Button>
                    </div>
                </nav>


            </dialog>
        </div>
    )
}
export default BurgerButton