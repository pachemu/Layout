import Objects from "@/pages/HomePage/ui/supply-chain/types/types";
import FirstScreenshot_buddy from "@/shared/assets/supplyChain/FirstScreen_buddy.svg";
import SecondScreenshot_buddy from "@/shared/assets/supplyChain/SecondScreen_buddy.svg";
import FirstScreenshot_speedy from "@/shared/assets/supplyChain/FirstScreen_speedy.svg";
import SecondScreenshot_speedy from "@/shared/assets/supplyChain/SecondScreen_speedy.svg";
import FirstScreenshot_money from "@/shared/assets/supplyChain/FirstScreen_money.svg";
import SecondScreenshot_money from "@/shared/assets/supplyChain/SecondScreen_buddy.svg";

const options : Objects[] = [
    {
        text: 'buddy',
        features: [
            "Create chats with any business (even if they’re not on Tinvio)",
            "Fully integrated with your favorite chat apps",
            "Real-time messages and alerts"
        ],
        FirstScreenshot: FirstScreenshot_buddy,
        SecondScreenshot: SecondScreenshot_buddy,
    },
    {
        text: 'speedy',
        features: [
            "Create or confirm purchase orders at lightning speed",
            "Manage inventory details and availability in real-time",
            "24/7 order insights and data reports"
        ],
        FirstScreenshot: FirstScreenshot_speedy,
        SecondScreenshot: SecondScreenshot_speedy,
    },
    {
        text: 'money',
        features: [
            "Send invoices and easily track them until they’re paid",
            "Real-time payments settlement and reconciliation",
            "Safe, secure, and compliant"
        ],
        FirstScreenshot: FirstScreenshot_money,
        SecondScreenshot: SecondScreenshot_money,
    },
]
export default options