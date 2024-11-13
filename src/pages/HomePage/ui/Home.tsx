import React from 'react';
import styles from './Home.module.scss'
import HomeBlock from "./home-block/ui/homeBlock";
import HowItWorks from "@/pages/HomePage/ui/how-it-works/ui/howItWorks";
import SupplyChain from "@/pages/HomePage/ui/supply-chain/ui/supplyChain";
import FeaturedOn from "@/pages/HomePage/ui/featured-on/ui/featuredOn";
import SmileOn from "@/pages/HomePage/ui/smile-on/ui/SmileOn";
import Form from "@/pages/HomePage/ui/theForm/ui/Form";

const Home = () => {
    return (
        <div className={styles.home}>
            <HomeBlock/>
            <HowItWorks/>
            <SupplyChain/>
            <FeaturedOn/>
            <SmileOn/>
            <Form/>
        </div>
    )
};
export default Home;
