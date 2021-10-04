import React from "react";
import AppsIcon from '@mui/icons-material/Apps';
import Modal from "./Modal";

const HomeButton = ({ openModal, setOpenModal }) => {

    function showModal() {
        setOpenModal(true);
    }

    if (openModal) {
        return (
            <Modal setOpenModal={setOpenModal} />
        )
    }
    else {
        return (
            <div className="homeBtn" style={{ color: "red" }} onClick={showModal}>
                <AppsIcon />
            </div>
        )
    }

}

export default HomeButton;