import React from "react";
import ReactDOM from "react-dom";
import NavbarContent from "./NavbarContent";

const Modal = ({ setOpenModal }) => {

    function closeModal() {
        setOpenModal(false);
    }

    return (
        ReactDOM.createPortal(
            <div className="modalContainer" onClick={closeModal}>
                <div className="modalBar">
                    <NavbarContent />
                </div>
            </div>, document.getElementById("portal")
        )
    )
}

export default Modal;