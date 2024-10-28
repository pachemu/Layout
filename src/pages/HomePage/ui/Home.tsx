import React from 'react';
import styles from './Home.module.scss'
import HomeBlock from "./home-block/ui/homeBlock";
import HowItWorks from "@/pages/HomePage/ui/how-it-works/ui/howItWorks";
import SupplyChain from "@/pages/HomePage/ui/supply-chain/ui/supplyChain";
import FeaturedOn from "@/pages/HomePage/ui/featured-on/ui/featuredOn";

const Home = () => {
    return (
        <div className={styles.home}>
            <HomeBlock/>
            <HowItWorks/>
            <SupplyChain/>
            <FeaturedOn/>
        </div>
    )
};
export default Home;
