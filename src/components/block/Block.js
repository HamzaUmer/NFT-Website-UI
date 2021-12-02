import React from 'react'
import "../block/block.css"
import Bg from "../../img/bg.png"
import T from "../../img/ticket.png"
import pointer from "../../img/pointer.png"
import Card from '../card/Card'
import { mlist } from '../../data'


const Block = () => {
    return (
        <div className="container2">
            <div className = "b-wrapper">
                <div className="ellipse3"></div>
                <img src={Bg} className="b-img1" />
                <img src={Bg} className="b-img2" />
                
                <h1 className="b-title">Collections</h1>
                <p className="b-desc">With more than 180+ hand drawn traits, each NFT is unique and comes with a membership to an exclusive group of successful investors. Join an ambitious ever-growing community with multiple benefits and utilities.</p>
                <div className="b-card">
                {mlist.map((item) => (
          <Card key={item.id} img={item.img} person={item.person} name={item.name} like={item.like} cb ={item.cb} ei={item.ei} />
        ))}
                </div>
                <div className="tag">
                        <div className="t-left">
                            <h1 className="t-title">The Golden Guests</h1>
                            <p className="t-desc">The Golden Guests edition by the Billionaire Club are the rarest NFTs. They are all hand drawn and have no element in common with the regular collection.</p>
                            <div className="t-shadow"></div>
                            <button type="sumbit" className="btn2">Join us to register for the Presale</button>
                        </div>
                        <div className="t-right">
                            <img src={T}  className="t-img" />
                        </div>
                </div>
                <div className="n-container">
                    <h1 className="n-title">Get Aped with Us!</h1>
                    <div className="input-container">
                        <input type="text" className="n-input" placeholder="Sign up for our newsletter" />
                        <img src={pointer} className="n-icon" />
                    </div>
                </div>
                
            </div>
            <hr style= {{border: "1px solid #818181", position:"absolute"
        ,width: "90%",
        height: "0px",
        left: "55px",
        top: "3087px",
        overflow:"hidden",
        }} className="hr-edit"/>
        </div>
    )
}

export default Block
