import React from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const CardElement = ({ cardImgs }) => {
    return (
        <div className="cardsCover">
            {
                cardImgs.map((cardObj, index) => {
                    return (
                        <div key={index} className="cardContainer">
                            <img src={cardObj.img} alt={cardObj.altTag} className="cardImg" />
                            <div className="cardTile">
                                <div className="cardHeading">{cardObj.heading}</div>
                                <div className="cardPara">{cardObj.para}
                                    <span style={{ color: "rgb(103, 165, 214)" }}>{cardObj.colouredPara}</span>
                                    <span>{cardObj.para2}</span>
                                </div>
                                <div className="cardButtons">
                                    <button className="cardBtn">
                                        <ArrowForwardIcon />
                                        <span>{cardObj.button}</span>
                                    </button>
                                    {cardObj.button2 !== "" && (
                                        <button className="cardBtn">
                                            <ArrowForwardIcon />
                                            <span>{cardObj.button2}</span>
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CardElement;