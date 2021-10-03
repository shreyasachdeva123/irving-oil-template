import React from "react";
import CompanyLogo from "./CompanyLogo";
import Search from "./Search";
import HomeButton from "./HomeButton";

const HeaderTop = () => {
    return (
        <div className="headerTop">
            <HomeButton />
            <CompanyLogo />
            <Search />
        </div>
    )
}

export default HeaderTop;