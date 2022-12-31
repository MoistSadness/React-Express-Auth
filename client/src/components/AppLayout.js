import React from "react";

import { Outlet } from "react-router-dom";

import Navbar from './navbar/Navbar.js'
import Footer from './footer/Footer.js'
import './App.css'

export default function AppLayout() {
    return (
        <>
            <Navbar />
            <div className="app-wrapper">
                <Outlet />
            </div>
            <Footer />
        </>
    )
}