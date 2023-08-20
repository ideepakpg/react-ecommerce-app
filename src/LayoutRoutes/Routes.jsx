import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import HomePage from '../components/Home/HomePage';
import Logout from '../components/Logout/Logout';
import ProductDetails from '../components/ProductDetails/ProductDetails';

function Routes1() {
    return (
        <>

            <Router>
                <Header />
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/logout' element={<Logout />} />
                    <Route path='/product/:id' element={<ProductDetails />} />
                </Routes>
                <Footer />
            </Router>

        </>
    );
}

export default Routes1;