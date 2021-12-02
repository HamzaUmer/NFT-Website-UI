import React from 'react'
import '../intro/intro.css'
import Img from "../../img/round.png"
import Img1 from "../../img/monkey1.png"
import Img2 from "../../img/Vector1.png"
import Img3 from "../../img/Vector2.png"
import Img4 from "../../img/Vector3.png"




const Intro = () => {
    return (
        <>
        <div className="container1">
            <div className="i-wrapper">
                <div className="i-left">
                    <div className="elipse"></div>
                    <img src={Img} className="i-img" />
                    <img src={Img1}  className="i-img1" />
                </div>
                <div className="i-right">
                    <div className="elipse1"></div>
                    <h2 className="i-title">EXCLUSIVE</h2>
                    <div className="vector">
                    <img src={Img2}  className="i-img2" />
                    <img src={Img4}  className="i-img3" />
                    <img src={Img3}  className="i-img4" />
                    </div>
                    <h3 className="i-tit">newese NFT release</h3>
                    <p className="i-desc">The <span className="i-edit">BILLIONAIRE CLUB</span> is a private collection of 10 000 billionaire apes NFTs—unique digital collectibles. The apes are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS.</p>
                    <p className="i-copy">Reveal on October 20th.</p>
                    <div className="i-input">
                        <input placeholder="your@email.com"/>
                        <button type="sumbit" className="btn1">Register</button>
                    </div>
                    
                </div>
            </div>
       
        </div>
        </>
    )
}

export default Intro
