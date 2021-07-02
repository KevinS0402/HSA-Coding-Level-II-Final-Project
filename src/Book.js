import React from 'react'
import Heading1 from './containers/Heading'
import './Book.css'
import KevinBook from './containers/Images/KevinBook'
import {NavBar} from './containers/NavBar'

const Book = () => (
    <>
    <NavBar/>
    <table id = "homeSection">
        <div id = "Column1Book">
            <Heading1 string = "The Secret Agent and the Hexagon"/>
            <h2>Synopsis</h2>
            <p id = "synopsis">Agent Kaden is a regular 11-year-old boy that goes to a <br></br>regular middle school. <br></br> He starts out as a sixth grader, unknowing what's going to happen later <br></br>in his middle school years. A letter then comes through the mail, <br></br>changing his whole life. He realizes that he has a whole new potential <br></br>of protecting the world from evil. While on a field trip <br></br>through space, the Hexagon runs into trouble, <br></br>and Agent Kaden is the only one not captured. He has to <br></br>train himself not only to fight against the <br></br>aliens but to save the whole world from total destruction. </p>
            <form action = "https://www.blurb.com/b/8785235-the-secret-agent-and-the-hexagon" target = "_blank">
                <input type = "submit" value = "Buy the Book!"/>
            </form>
        </div>
        <div id = "Column2Book">
        <KevinBook/>
        </div>
    </table>
    </>
)

export default Book