import React from 'react';
import styles from './Home.module.scss'
import HomeBlock from "./home-block/ui/homeBlock";
const Home = () => {
    return (
        <div className={styles.home}>
                <HomeBlock/>
        </div>
    )
};
export default Home;
