import Button from "@/shared/ui/Button/ui/Button";
import styles from './supplyChain.module.scss'
import FullRedRectangle from '@/shared/assets/supplyChain/FullRedRectangle.svg'
import RedRectangle from '@/shared/assets/supplyChain/RedRectangle.svg'
import Shines from '@/shared/assets/supplyChain/Shines.svg'
import Features from "@/shared/ui/Features/ui/Features";
import {useEffect, useState} from "react";
import Buttons from "@/pages/HomePage/ui/supply-chain/Buttons/ui/Buttons";
import options from "@/pages/HomePage/ui/supply-chain/Buttons/const/const";
import GrayRectangles from '@/shared/assets/supplyChain/GrayRectangles.svg'

const SupplyChain = () => {

    const [main, setMain] = useState(options[0])

    const [animateKey, setAnimateKey] = useState(0);

// Эффект для перезапуска анимации при изменении main
    useEffect(() => {
        setAnimateKey(prevKey => prevKey + 1);
    }, [main]);

    return (
        <section className={styles.chain}>
            <div className={styles.chain_base}>
                <div className={styles.chain_base_main}> {/* Див с основным содержанием */}
                    <div className={styles.chain_base_main__title}>
                        <h1 className={styles.chain_base_main__title}>Smarter supply chain transactions.
                            <span
                                key={animateKey}
                                className={`${styles.chain_base_main__title_subtitle}`}>More {main.text}
              </span>
                        </h1>

                    </div>
                    <div>
                        <Buttons main={main} setMain={setMain} options={options}/>
                    </div>
                    {/* features */}
                    <div className={styles.chain_base_main__features}>
                        <Features array={main.features}/>
                    </div>
                    <span className={styles.chain_base_main__button}>
                        <Button type={'red'}>
                            More Features
                        </Button>
                    </span>
                </div>
                <div className={styles.background}> {/* Див с бэкграундом*/}
                    <FullRedRectangle className={styles.background_fullredRectangle}/>
                    <RedRectangle className={styles.background_redRectangle}/>
                    <GrayRectangles className={styles.background_grayRectangles}/>
                    <main.FirstScreenshot className={styles.background_firstScreenshot}/>
                    <main.SecondScreenshot className={styles.background_secondScreenshot}/>
                    <Shines className={styles.background_shines}/>
                </div>
            </div>
        </section>
    )
}

export default SupplyChain