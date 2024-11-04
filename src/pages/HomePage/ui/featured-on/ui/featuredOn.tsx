import FeaturedBy from '@/shared/assets/featuredOn/FeaturedBy.svg'
import Background from '@/shared/assets/featuredOn/Background.svg'
import Shines from '@/shared/assets/featuredOn/Shines.svg'
import SmallRectangles from '@/shared/assets/featuredOn/SmallRectangles.svg'
import GrayRectangle from '@/shared/assets/featuredOn/GrayRectangle.svg'
import ChooseBackground from '@/shared/assets/featuredOn/ChooseBackground.svg'
import TechCrunch from '@/shared/assets/featuredOn/companies/TechCruch.svg'
import TechInAsia from '@/shared/assets/featuredOn/companies/TechInAsia.svg'
import Pymnts from '@/shared/assets/featuredOn/companies/PYMNTScom.svg'
import VentureBeat from '@/shared/assets/featuredOn/companies/VentureBeat.svg'
import styles from './FeaturedOn.module.scss'
import React from "react";
import Slider from "@/shared/ui/Slider/ui/Slider";
import {slides} from "@/pages/HomePage/ui/featured-on/const/const";


const featuredOn = () => {

    return (
        <section className={styles.featuredOn}>
            <div className={styles.featuredOn_block}>
                <Background className={styles.featuredOn_background}/>
                <div className={styles.featuredOn_block_base}>
                    <h1 className={styles.featuredOn_title}>
                        Featured On
                    </h1>
                    <div className={styles.featuredOn_companies}>
                        <TechCrunch/>
                        <TechInAsia/>
                        <Pymnts/>
                        <VentureBeat/>
                    </div>
                </div>
            </div>
            <Shines className={styles.featuredOn_shines}/>
            <div>
                <ChooseBackground className={styles.featuredOn_whyChoose_background}/>
                <div className={styles.featuredOn_whyChoose_main}>
                    <h1 className={styles.featuredOn_whyChoose_main_title}>
                        Why choose Tinvio?
                    </h1>
                    <div className={styles.block}>
                        <GrayRectangle className={styles.featuredOn_whyChoose_firstRectangle}/>
                        <SmallRectangles className={styles.featuredOn_whyChoose_firstSmallRectangles}/>
                    </div>

                    <div className={styles.featuredOn_whyChoose_main_slider}>
                            <Slider slides={slides}/>
                    </div>
                    <div className={styles.block}>
                        <SmallRectangles className={styles.featuredOn_whyChoose_secondSmallRectangles}/>
                        <GrayRectangle className={styles.featuredOn_whyChoose_secondRectangle}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default featuredOn