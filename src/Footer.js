import React from "react";
import FooterImg from "./artwork/photos/IrvingCanopy.jpg";
import FooterNav from "./FooterNav";
import FooterBottom from "./FooterBottom";

const Footer = ({ footerNav1, footerNav2, bottomNav }) => {
    return (
        <div className="footerWrapper">
            <div className="footerImg">
                <img src={FooterImg} alt="canopy illustration" className="canopyImg" />
                <FooterNav footerNav1={footerNav1} footerNav2={footerNav2} />
                <FooterBottom bottomNav={bottomNav} />
            </div>
        </div>
    )
}

export default Footer;