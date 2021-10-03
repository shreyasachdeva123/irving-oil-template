import React from "react";
import CardElement from "./CardElement";

const Cards = ({ cardImgs }) => {
    return (
        <div className="cardsWrapper">
            <div className="cardsHeadingMain">
                <p>What can we help you with today?</p>
            </div>
            <CardElement cardImgs={cardImgs} />
        </div>
    )
}

export default Cards;