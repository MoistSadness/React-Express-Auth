import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import axios from 'axios';

import AppLayout from './AppLayout.js';

import Home from './pages/home/Home.js'
import Servants from './pages/servants/Servants.js'
import CraftEssences from './pages/craftEssences/CraftEssences.js'
import MysticCodes from './pages/mysticCodes/MysticCodes.js'
import Items from './pages/items/Items.js'
import About from './pages/about/About.js'
import Login from './pages/access/Login.js';
import Register from './pages/access/Register.js';
import NotFound from './pages/notFound/NotFound.js'

import './App.css';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<AppLayout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/servants" element={<Servants />}></Route>
            <Route path="/craftEssences" element={<CraftEssences />}></Route>
            <Route path="/mysticCodes" element={<MysticCodes />}></Route>
            <Route path="/items" element={<Items />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/*" element={<NotFound />}></Route>
        </Route>
    )
);

export default function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}