
import { FaHome,FaHeart  } from "react-icons/fa";
import { RiWallet3Fill } from "react-icons/ri";
import { MdMarkEmailUnread } from "react-icons/md";

interface SidebarData {
    title: string;
    path: string;
    icon: any;
    cName: string;
}

export const sidebarMenuData : SidebarData[] = [
    {
        title: 'Home',
        path: '/',
        icon: FaHome  ,
        cName: 'nav-text',
    },
    {
        title: 'Wallet',
        path: '/wallet',
        icon: RiWallet3Fill  ,
        cName: 'nav-text',
    },
    {
        title: 'Wishlist',
        path: '/contwishlistact',
        icon: FaHeart  ,
        cName: 'nav-text',
    },
    {
        title: 'Notification',
        path: '/notification',
        icon: MdMarkEmailUnread  ,
        cName: 'nav-text',
    },
   
    ];
