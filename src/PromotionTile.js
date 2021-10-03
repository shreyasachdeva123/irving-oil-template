import React from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const PromotionTile = ({ promotionObj }) => {
    return (
        <div className="promotionBlock">
            <div className="promotionHeading">{promotionObj.heading}</div>
            <div className="promotionPara">{promotionObj.para}</div>
            <div className="promotionButtons">
                <button>
                    <ArrowForwardIcon />
                    <span className="promotionBtn">
                        {promotionObj.button}
                    </span>
                </button>
                <button>
                    <ArrowForwardIcon />
                    <span className="promotionBtn">
                        {promotionObj.button2}
                    </span>
                </button>
            </div>
        </div>
    )
}

export default PromotionTile;