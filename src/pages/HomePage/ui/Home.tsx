import React from 'react';
import styles from './Home.module.scss'
import HomeBlock from "./home-block/ui/homeBlock";
import HowItWorks from "@/pages/HomePage/ui/how-it-works/ui/howItWorks";

const Home = () => {
    return (
        <div className={styles.home}>
            <HomeBlock/>
            <HowItWorks/>
        </div>
    )
};
export default Home;
