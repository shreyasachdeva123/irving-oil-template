import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TopOilLogo from "./artwork/logos/topoil_logo.png";


const FooterNav = ({ footerNav1, footerNav2 }) => {
    return (
        <div className="footerNavWrapper">
            <div className="footerNav1">
                {
                    footerNav1.map((item, index) => {
                        return (
                            <li key={index}>{item}</li>
                        )
                    })
                }
            </div>
            <div className="footerNav2">
                {
                    footerNav2.map((item, index) => {
                        return (
                            <li key={index}>{item}</li>
                        )
                    })
                }
            </div>
            <div className="logoBar">
                <div className="socialMediaIcons">
                    <div className="socialMediaLogo">
                        <FacebookIcon />
                    </div>
                    <div className="socialMediaLogo">
                        <InstagramIcon />
                    </div>
                    <div className="socialMediaLogo">
                        <TwitterIcon />
                    </div>
                    <div className="socialMediaLogo">
                        <LinkedInIcon />
                    </div>
                </div>
                <div className="topOil">
                    <img src={TopOilLogo} alt="top oil logo" />
                </div>
            </div>
        </div>
    )
}

export default FooterNav;