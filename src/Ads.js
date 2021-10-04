import React from "react";
import adBanner from "./artwork/ads/F150 Contest.png";


const Ads = () => {
    return (
        <div className="adsContainer">
            <img src={adBanner} alt="car prize" className="adsImg" />
        </div>
    )
}

export default Ads;