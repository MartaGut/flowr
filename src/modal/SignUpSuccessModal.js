import React from "react";
import Modal from 'react-modal';

function SignUpSuccessModal(props) {

    function openLogin() {
        props.setModalOpenRegSuccess(false);
        props.setModalOpen(true);
    }

    return (
        <Modal isOpen={props.modalRegOpenSuccess} ariaHideApp={false} style={{
            overlay: {
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: '1',
                background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.8) 100%)'
            },
            content: {
                position: 'absolute',
                width: '440px',
                height: '200px',
                border: '1px solid #ccc',
                background: '#fff',
                outline: 'none',
                margin: '0 auto',
                top: '21%',
                overflow: 'none'
            }
        }}>
            <h3>Congratulations! You have successfully signed up for FlowrSpot!</h3>
            <span className="btns">

                <button onClick={openLogin}>OK</button>
            </span>
        </Modal>
    );
}

export default SignUpSuccessModal;