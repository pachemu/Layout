import Button from "@/shared/ui/Button/ui/Button";
import styles from './supplyChain.module.scss'
import FullRedRectangle from '@/shared/assets/supplyChain/FullRedRectangle.svg'
import RedRectangle from '@/shared/assets/supplyChain/RedRectangle.svg'
import FirstScreenshot from '@/shared/assets/supplyChain/FirstScreen.svg'
import SecondScreenshot from '@/shared/assets/supplyChain/SecondScreen.svg'
import Shines from '@/shared/assets/supplyChain/Shines.svg'
import Buttons from "@/widgets/Buttons/ui/Buttons";
import Features from "@/shared/ui/Features/ui/Features";

const SupplyChain = () => {
    const arrayOfFeatures = [
        "Create chats with any business (even if they’re not on Tinvio)",
        "Fully integrated with your favorite chat apps",
        "Real-time messages and alerts"
    ]
    return (
        <div className={styles.chain}>
            <div className={styles.chain_base}>
                <div className={styles.chain_base_main}> {/* Див с основным содержанием*/}
                    <div className={styles.chain_base_main__title}>
                        <h1>Smarter supply chain transactions. <span className={styles.chain_base_main__title_subtitle}>More buddy</span></h1>
                    </div>
                    <div>
                        <Buttons/>
                    </div>
                    {/* features */}
                    <div className={styles.chain_base_main__features}>
                        <Features array={arrayOfFeatures}/>
                    </div>
                    <Button type={'red'}>
                        More Features
                    </Button>
                </div>
                <div className={styles.background}> {/* Див с бэкграундом*/}
                    <FullRedRectangle className={styles.background_fullredRectangle}/>
                    <RedRectangle className={styles.background_redRectangle}/>
                    <FirstScreenshot className={styles.background_firstScreenshot}/>
                    <SecondScreenshot className={styles.background_secondScreenshot}/>
                    <Shines className={styles.background_shines}/>
                </div>
            </div>
        </div>
    )
}

export default SupplyChain