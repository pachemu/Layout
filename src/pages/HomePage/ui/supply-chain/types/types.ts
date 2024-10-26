import FirstScreenshot from "@/shared/assets/supplyChain/FirstScreen.svg";
import SecondScreenshot from "@/shared/assets/supplyChain/SecondScreen.svg";

interface Objects {
    text: string;
    features: string[],
    FirstScreenshot: typeof FirstScreenshot,
    SecondScreenshot: typeof SecondScreenshot,
    name?: string;
}
export default Objects;