import React from 'react';
import './NavBar.css'
import { Link } from 'react-router-dom'
import fireLogo from './KSONG-FIRE.png'



export const NavBar = () => 
(
    <>
        <h2>KEVIN SONG</h2>
        <center><img id = "fireLogo" src = {fireLogo} alt="Kevin Song Logo"/></center>
        <ul>
            <li> <Link to="/">HOME</Link> </li>
            <li> <Link to = "/about">ABOUT</Link> </li>
            <li> <Link to = "/music">MUSIC</Link> </li>
            <li> <Link to = "/book">BOOK</Link> </li>
            <li> <Link to = "/contact">CONTACT</Link> </li>
        </ul>
    </>
)

