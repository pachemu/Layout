import FeaturedBy from '@/shared/assets/featuredOn/FeaturedBy.svg'
import Background from '@/shared/assets/featuredOn/Background.svg'
import Shines from '@/shared/assets/featuredOn/Shines.svg'
import SmallRectangles from '@/shared/assets/featuredOn/SmallRectangles.svg'
import GrayRectangle from '@/shared/assets/featuredOn/GrayRectangle.svg'
import ChooseBackground from '@/shared/assets/featuredOn/ChooseBackground.svg'
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
                        <FeaturedBy/>
                    </div>
                </div>
            </div>
            <Shines className={styles.featuredOn_shines}/>
            <div>
                <ChooseBackground className={styles.featuredOn_whyChoose_background}/>
                <div>
                    <h1 className={styles.featuredOn_whyChoose_main_title}>
                        Why choose Tinvio?
                    </h1>
                    <GrayRectangle className={styles.featuredOn_whyChoose_firstRectangle}/>
                    <SmallRectangles className={styles.featuredOn_whyChoose_firstSmallRectangles}/>
                    <div className={styles.featuredOn_whyChoose_main_slider}>
                            <Slider slides={slides}/>
                    </div>
                    <SmallRectangles className={styles.featuredOn_whyChoose_secondSmallRectangles}/>
                    <GrayRectangle className={styles.featuredOn_whyChoose_secondRectangle}/>
                </div>
            </div>
        </section>
    )
}

export default featuredOn