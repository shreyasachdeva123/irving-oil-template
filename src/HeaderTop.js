import React from "react";
import CompanyLogo from "./CompanyLogo";
import Search from "./Search";
import HomeButton from "./HomeButton";

const HeaderTop = ({ openModal, setOpenModal }) => {
    return (
        <div className="headerTop">
            <HomeButton openModal={openModal} setOpenModal={setOpenModal} />
            <CompanyLogo />
            <Search />
        </div>
    )
}

export default HeaderTop;