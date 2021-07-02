import React from 'react'
import {NavBar} from './containers/NavBar'
import Heading1 from './containers/Heading'
import './Music.css'
import BubbleGum from './containers/Images/KevinMusic'
import TwentyFour from './containers/Images/KevinMusic2'

const Music = () => (
    <>
    <NavBar/>
    <h1>My Music</h1>
    <p></p>
    <table id = "homeSection">
        
        <div id = "Column1Music">
            <BubbleGum/>
        </div>
        <div id = "Column2Music">
            <Heading1 string = "BUBBLE GUM"/>
            
            <iframe width="90%" height="63%" src="https://www.youtube.com/embed/ldvgXqlSvXU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            
        </div>
        
    </table>
    <table id = "homeSection">
        <div id = "Column1Music">
        <TwentyFour/>
        </div>
        <div id = "Column2Music">
        
        <Heading1 string = "24/7/365"/>

        <iframe width="90%" height="63%" src="https://www.youtube.com/embed/Aql-Y1MqpBQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </table>
    </>
)
export default Music