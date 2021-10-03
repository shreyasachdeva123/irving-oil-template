import React from "react";
import PromotionTile from "./PromotionTile";

const Promotions = ({ promotionContent }) => {
    return (
        <div className="promotionsWrapper">
            {
                promotionContent.map((promotionObj, index) => {
                    return (
                        <div className="promotionsContainer" key={index}>
                            {index === 0 && (
                                <>
                                    <img src={promotionObj.img} alt={promotionObj.altTag} className="promotionsImg" />
                                    <PromotionTile promotionObj={promotionObj} />
                                </>
                            )}
                            {index === 1 && (
                                <>
                                    <PromotionTile promotionObj={promotionObj} />
                                    <img src={promotionObj.img} alt={promotionObj.altTag} className="promotionsImg" />
                                </>
                            )}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Promotions;