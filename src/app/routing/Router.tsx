// src/app/Router.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "../../pages/HomePage";
import Layout from '../../shared/ui/Layout';
import '../styles/main.scss';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default AppRouter;