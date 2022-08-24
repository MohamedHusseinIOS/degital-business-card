import React from "react";
import myImg from './Assets/my-img.png'
import email_icon from './Assets/email.png'
import linkedin_icon from './Assets/Icon/Font Awesome Free/Brands/L/linkden.png'
import './ComponentsStyle.css'

function openEmail() {
    window.open('mailto:mohamed.hussien07@gmail.com')
}

function openLinkedin() {
    window.open('https://linkedin.com/in/mohamed-hussien-71681a45')
}

function Info() {
    return (
        <div className="info-div">
            <img className="info-img" src={myImg} alt="my_image" />
            <h1 className="info-fullname">Muhammed Hussein</h1>
            <p className="info-title">iOS TeamLeader</p>
            <p className="info-website">Muhammed.website</p>
            <div className="info-btns-div">
                <button className="info-email-btn" onClick={openEmail}>
                    <img src={email_icon} alt="email" />
                    Email
                </button>
                <button className="info-linkedin-btn" onClick={openLinkedin}>
                    <img src={linkedin_icon} alt="email" />
                    Linkedin
                </button>
            </div>
        </div>
    )
}

export default Info;