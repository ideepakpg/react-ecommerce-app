import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import HomePage from '../components/Home/HomePage';

function Routes1() {
    return (
        <>

            <Router>
                <Header />
                <Routes>
                    <Route path='/' element={<HomePage />} />
                </Routes>
                <Footer />
            </Router>

        </>
    );
}

export default Routes1;