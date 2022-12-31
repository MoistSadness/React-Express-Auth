import React from "react";
import { Link } from "react-router-dom";

import './Navbar.css'

export default function () {
    return (
        <nav className="nav-container">
            <li className="nav-item-container">
                <ul className="nav-item">
                    <Link to={'/'}>Home</Link>
                </ul>
                <ul className="nav-item">
                    <Link to={'/servants'}>Servants</Link>
                </ul>
                <ul className="nav-item">
                    <Link to={'/craftEssences'}>Craft Essences</Link>
                </ul>
                <ul className="nav-item">
                    <Link to={'/mysticCodes'}>Mystic Codes</Link>
                </ul>
                <ul className="nav-item">
                    <Link to={'/items'}>Items</Link>
                </ul>
                <ul className="nav-item">
                    <Link to={'/about'}>About</Link>
                </ul>
            </li>
            <li className="access-container">
                <ul className="access-item">
                    <Link to={'/login'}>Login</Link>
                </ul>
                <ul className="access-item">
                    <Link to={'/register'}>Register</Link>
                </ul>
            </li>
        </nav>
    )
}