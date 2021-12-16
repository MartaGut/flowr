import React from "react";
import Modal from "react-modal";

function VezbaModal(props) {

    console.log(props);

    function closeVezba() {
        props.closeVezba()
    };

    return (
        <div>
            <Modal isOpen={props.vezbaModal}>
                Hello
                <button onClick={closeVezba}>XXX</button>
            </Modal>
        </div>
    );
}

export default VezbaModal;