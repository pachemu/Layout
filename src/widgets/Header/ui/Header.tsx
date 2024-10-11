import styles from './Header.module.scss'
import Button from '../../../shared/ui/Button/ui/Button';
import {NavLink} from 'react-router-dom';
import Logo from '@/shared/assets/Logo.svg'
import Tinvio from '@/shared/assets/Tinvio.svg'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container} style={{paddingTop: '20px'}}>
                <div className={styles.container_inner_logo}>
                    <span className={styles.logo}><Logo width={"50"} height={"44"}/></span>
                    <span className={styles.logo}><Tinvio/></span>
                </div>
                <nav>
                    <ul className={styles.list}>
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
                </nav>
                <div>
                    <Button type={'white'} style={{}}>
                        Get started
                    </Button>
                </div>
            </div>
        </header>
    )
}

export default Header