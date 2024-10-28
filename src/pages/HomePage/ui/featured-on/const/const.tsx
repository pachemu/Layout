import React from "react";
import SecondImage from '@/shared/assets/featuredOn/Slides/Images/Second_image.svg'
import SecondShines from '@/shared/assets/featuredOn/Slides/Shines/Shines_Second.svg'
import SecondLogo from '@/shared/assets/featuredOn/Slides/Logos/Hafidz&Indah.svg'
import FirstLogo from '@/shared/assets/featuredOn/Slides/Logos/First_logo.svg'
import FirstImage from '@/shared/assets/featuredOn/Slides/Images/First_image.svg'
import ThirdLogo from '@/shared/assets/featuredOn/Slides/Logos/Third_logo.svg'
import ThirdImage from '@/shared/assets/featuredOn/Slides/Images/Third_image.svg'
import FourthImage from '@/shared/assets/featuredOn/Slides/Images/Fourth_image.svg'
import FourthLogo from '@/shared/assets/featuredOn/Slides/Logos/Fourth_logo.svg'
import Brackets from '@/shared/assets/featuredOn/“.svg'
import styles from './slide.module.scss'

const data = [
    {
        description: 'Tinvio definitely helps to reduce the time and errors in order management between customers and suppliers. It’s super easy to use and available on mobile and web, and the team are friendly and always helpful.',
        logo: <FirstLogo/>,
        image: <FirstImage/>,
    },

    {
        description: 'Tinvio has been a foundational partner and solution. We now have faster and more efficient communication with our clients, which makes order processing and deliveries smoother than ever before.',
        image: <SecondImage/>,
        shines: <SecondShines/>,
        logo: <SecondLogo/>
    },
    {
        description: 'Tinvio helps our business run smoother. We can manage our customer\'s orders, receivables, and most importantly, trace and reconcile their payments without checking banking apps or statements.',
        image: <ThirdImage/>,
        logo: <ThirdLogo/>
    },
    {
        description: 'Tinvio has been a foundational partner and solution. We now have faster and more efficient communication with our clients, which makes order processing and deliveries smoother than ever before.',
        image: <FourthImage/>,
        logo: <FourthLogo/>
    }
]
export const slides = [
    ...data.map((item, index) => (
        <div key={index} className={styles.block}>
            <div className={styles.block_description}>
                <span className={styles.block_description_text}>
                {item.description}
                    </span>
                <Brackets className={styles.block_description_brackets}/>
            </div>
            <div className={styles.block_logo}>
                {item.logo}
            </div>
            <div>
                <div className={styles.block_image}>
                    {item.image}
                </div>
                <div className={styles.block_shines}>
                    {item.shines}
                </div>
            </div>
        </div>
    ))
];