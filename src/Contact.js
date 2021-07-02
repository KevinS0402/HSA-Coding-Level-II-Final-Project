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
                <h1>Contact</h1>
                <p><b>Email:</b></p>
                <center>
                <a href="mailto:skevin0402@gmail.com">skevin0402@gmail.com</a>
                <p></p>
                <p></p>
                <p><b>DevelopIT (Nonprofit):</b></p>
                <a href = "https://www.developitinc.org" target = "_blank">Link to Website</a>
                <p></p>
                <p></p>
                <p><b>Instagram:</b></p>
                <a href = "https://www.instagram.com/kevinsong.fire/" target = "_blank">@kevinsong.fire</a>
                <p></p>
                <p>
                </p>
                <p><b>Connect with KSONG (Music):</b></p>
                <a href = "https://linktr.ee/ksongsocial" target = "_blank">Link to socials</a>
                </center>
            </div>
            <div id = "Column2Contact">
                <KevinPhoto3/>
            </div>
        </table>
    </div>
)

export default Contact