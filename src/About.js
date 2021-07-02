import React from 'react'
import {NavBar} from './containers/NavBar'
import Heading1 from './containers/Heading'
import './About.css'
import KevinSongPhoto2 from './containers/Images/KevinPhoto2'

const About = () => (
    <div className = "About">
        <>
            <NavBar/>
            <table id = "homeSection">
                <p> </p>
                <div id = "Column1About">
                    <h1>About Me</h1>
                    <p id = "AboutMessage">Hi! My name is Kevin Song. I am a rising junior going into Poolesville HS.
                    <br></br>I am a rapper, author, and CEO of a nonprofit! </p>
                    <h3 id = "AboutMe"><b>Hobbies/Interests</b></h3>
                    <h4 id = "AboutMeSub">Hobbies:</h4>
                    <ul id = "AboutList">
                        <li id = "AboutItem">Tennis</li>
                        <li id = "AboutItem">Swimming</li>
                        <li id = "AboutItem">Chinese</li>
                        <li id = "AboutItem">Piano</li>
                    </ul>
                    <h4 id = "AboutMeSub">Interests:</h4>
                    <ul id = "AboutList">
                        <li id = "AboutItem">Computer Science</li>
                        <li id = "AboutItem">Finance</li>
                    </ul>
                    <h3 id = "AboutMe">Achievements</h3>
                    <ul id = "AboutList">
                        <li id = "AboutItem">MESA National Engineering Design Challenge State Champions</li>
                        <li id = "AboutItem">MESA National Engineerign Design Challenge Regional Champions</li>
                        <li id = "AboutItem">Harvard HSA Scholar (Completed all three required courses counting this one)</li>
                        <li id = "AboutItem">First Lego League Robot Design Award</li>
                    </ul>
                    <h3 id = "AboutMe">Works:</h3>
                    <ul id = "AboutList">
                        <li id = "AboutItem">Produced and released music (under the name of KSONG)</li>
                        <li id = "AboutItem">Published a sci-fi novel (The Secret Agent and the Hexagon)</li>
                        <li id = "AboutItem">Created a nonprofit (DevelopIT Inc.) DevelopIT's mission is about inspiring students to pursue their passions from an early age and helping them to fulfill their dream of becoming future leaders in the field of technology and computer science.</li>
                    </ul>
                </div>
                <div id = "Column2About">
                    <KevinSongPhoto2/>
                </div>
            </table>
            
        </>
    </div>
)

export default About