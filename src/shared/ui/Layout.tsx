// src/shared/ui/Layout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../widgets/Header/ui/Header';

const Layout = () => {
    return (
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;