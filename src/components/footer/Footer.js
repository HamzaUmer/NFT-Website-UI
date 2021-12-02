import React from 'react'
import { NavLink } from 'react-router-dom'
import "./footer.css"
import Slogo from "../../img/logo.png"
import Game from "../../img/game.png"
import Insta from "../../img/insta.png"
import Twitter from "../../img/twitter.png"

const Footer = () => {
    return (
        <div className="containerf">
            <div className="f-wrapper">
                <div className="f-left">
                    <img src={Slogo} className="f-logo" />
                    <NavLink to="#" className="f-li">Terms of Service</NavLink>
                    <NavLink to="#" className="f-li">Privacy Policy</NavLink>
                </div>
                <div className="f-right">
                    <img src={Twitter} className="f-icon" />
                    <img src={Game} className="f-icon" />
                    <img src={Insta} className="f-icon" />
                </div>

            </div>
            
        </div>
    )
}

export default Footer
