import DashboardIcons from "../../assets/icons/DashboardIcons";
import DashboardIconsActive from "../../assets/icons/DashboardIconsActive";
import TradeIcons from "../../assets/icons/TradeIcons";
import TradeIconsActive from "../../assets/icons/TradeIconsActive";
import VipMembers from "../../assets/icons/VipMembers";
import WalletIcons from "../../assets/icons/WalletIcons";
import WalletIconsActive from "../../assets/icons/WalletIconsActive";

export const data_vertical= [{
    link: "/index",
    icons: <TradeIcons />,
    iconsActive: <TradeIconsActive />,
    title: "Trade",

},
{
    link: "/affiliate/general",
    icons: <VipMembers />,
    iconsActive: <VipMembers />,
    title: "Vip Member",
},
{
    link: "/user/balance",
    icons: <WalletIcons />,
    iconsActive: <WalletIconsActive />,
    title: "Wallet",
    
},{
    link: "/user/trade-history",
    icons: <DashboardIcons />,
    iconsActive: <DashboardIconsActive />,
    title: "Dashboard",
    
}

]

