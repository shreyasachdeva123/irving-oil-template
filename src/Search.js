import React from "react";
import CanadaFlag from "./artwork/illustrations/canada_icon.png";
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
    return (
        <div className="searchContainer">
            <div className="nameItem">Hi Anthony</div>
            <div className="language languageItem">
                <div>
                    <img className="flag" src={CanadaFlag} alt="Canada flag" />
                </div>
                <div>Canada english</div>
            </div>
            <div className="searchItem">
                <SearchIcon />
            </div>
        </div>
    )
}

export default Search;

