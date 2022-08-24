import React from "react";
import TwIcon from './Assets/Twitter_Icon.png'
import FbIcon from './Assets/Facebook_Icon.png'
import Insta_Icon from './Assets/Instagram_Icon.png'
import Gh_Icon from './Assets/GitHub_Icon.png'

function openTwitter() {
    window.open('https://twitter.com/Mohamed01805456')
}

function openFacebook() {
    window.open('https://www.facebook.com/one.ofpeople')
}

function openInstagram() {
    window.open('https://www.instagram.com/oneof_people/')
}

function openGitHub() {
    window.open('https://github.com/MohamedHusseinIOS')
}


function Footer() {

    return (
        <div className="footer-div">
            <img src={TwIcon} alt='twitter' onClick={openTwitter}/>
            <img src={FbIcon} alt='twitter' onClick={openFacebook}/>
            <img src={Insta_Icon} alt='twitter' onClick={openInstagram}/>
            <img src={Gh_Icon} alt='twitter' onClick={openGitHub}/>
        </div>
    )
}

export default Footer;