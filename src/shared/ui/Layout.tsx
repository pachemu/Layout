import React from 'react';
import styles from './Layout.module.scss'
import { Outlet } from 'react-router-dom';
import Header from '@/widgets/Header/ui/Header';
import '@/app/styles/main.scss'
import Footer from "@/widgets/Footer/ui/Footer";

const Layout = () => {
    return (
        <div className={styles.layout}>
            <Header />
            <main className={styles.main}>
                <Outlet />
            </main>
            <Footer/>
        </div>
    );
};

export default Layout;