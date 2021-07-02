import React from 'react'
import Heading1 from './containers/Heading'
import './Contact.css'
import {NavBar} from './containers/NavBar'
import KevinPhoto3 from './containers/Images/KevinPhoto3'

const Contact = () => (
    <div className = "Contact">
        <>
        <NavBar/>
        </>
        <table id = "homeSection">
            <div id = "Column1Contact">
                <Heading1 string = "Contact"/>
                <p>Email:</p>
                <center>
                <a href="mailto:skevin0402@gmail.com">skevin0402@gmail.com</a>
                </center>
            </div>
            <div id = "Column2Contact">
                <KevinPhoto3/>
            </div>
        </table>
    </div>
)

export default Contact