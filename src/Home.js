import React from 'react'
import Heading1 from './containers/Heading'
import './Home.css'
import KevinPhoto from './containers/Images/KevinPhoto'
import {NavBar} from './containers/NavBar'


const Home = () => (
  <div className="Home">
    <>
    <NavBar/>
      <table id = "homeSection">
        <div id = "Column1Home">
          <KevinPhoto/>
        </div>
        <div id = "Column2Home">
          <Heading1 string = "KEVIN SONG"/>
          
          <p id = "WelcomeMessage">Welcome to my website!<br></br>You can browse around my website by clicking on the <br></br>links in the navigation bar. You can also click on the button <br></br>below to learn more about me!</p>
          
          <form action = "/about">
            <input type = "submit" value = "About Me"/>
          </form>
          <p id = "WelcomeMessage">Made by Kevin Song</p>
        </div>
      </table>
      
    </>
  </div>
)

export default Home
