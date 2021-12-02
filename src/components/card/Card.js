import React from 'react'
import "./card.css"
import P from "../../img/person1.png";
import S from "../../img/star.png"
import M from "../../img/Monkey.png"

const Card = ({img,person,name,like,cb,ei}) => {
    return (
        <div className="card-list">
            <div className="c-info">
                <div className="c-main">
                <div className="c-left"> 
                <img src={person}  className="c-img" />
                <p className="c-name">{name}</p>
                </div>
                <div className="c-right">
                    <img src={S} className="star"/>
                    <p className="c-like">{like}</p>
                </div>
                </div>
                <img src={img} className="c-img1" />
                <div className="c-wrapper">
                    <div className="c-left1">
                        <p className="c-desc">Current bid</p>
                        <h3 className="c-title">{cb}</h3>
                    </div>
                    <div className="c-right1">
                    <p className="c-desc1">Ending in</p>
                        <h3 className="c-title">{ei}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
