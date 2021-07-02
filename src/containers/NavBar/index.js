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
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to = "/about">About</Link> </li>
            <li> <Link to = "/music">Music</Link> </li>
            <li> <Link to = "/book">Book</Link> </li>
            <li> <Link to = "/contact">Contact</Link> </li>
        </ul>
    </>
)

