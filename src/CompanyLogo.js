import React from "react";
import logoImg from "./artwork/logos/IrvingOil.svg.png";

const CompanyLogo = () => {
    return (
        <div className="companyLogo">
            <img className="mainLogo" src={logoImg} alt="company logo" />
        </div>
    )
}

export default CompanyLogo;