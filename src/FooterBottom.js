import React from "react";
// import CompanyLogo from "./CompanyLogo";
import logoImg from "./artwork/logos/IrvingOil.svg.png";


const FooterBottom = ({ bottomNav }) => {
    return (
        <div className="footerBottom">
            <div className="copyrightsDiv">
                <div className="irvingBottomLogo">
                    <img src={logoImg} alt="Irving oil logo" />
                </div>
                <div className="irvingCopyright">
                    <div>&copy;</div>
                    <div className="copyright2021">2021 Irving Oil</div>
                </div>
            </div>
            <div className="copyrightNav">
                {
                    bottomNav.map((item, index) => {
                        return (
                            <li key={index}>{item}</li>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default FooterBottom;