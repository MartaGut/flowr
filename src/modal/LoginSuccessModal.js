import React from "react";
import Modal from 'react-modal';

function LoginSuccessModal(props) {

    const { setModalUserInfo } = props;

    function closeModal() {
        props.modalCloseSuccess();
        // props.setModalOpen(false);
    }

    function openModalProfile() {
        props.modalCloseSuccess();
        setModalUserInfo(true);
    }

    return (
        <Modal isOpen={props.modalOpenSuccess}>
            <h3>Congratulations! You have successfully logged into FlowrSpot!</h3>
            <span className="btns">
                <button onClick={closeModal}>OK</button>
                <button onClick={openModalProfile}>Profile</button>
            </span>
        </Modal>
    );
}

export default LoginSuccessModal;