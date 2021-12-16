import React, { useState } from "react";
import Modal from 'react-modal';
import { useDispatch } from "react-redux";
import { signUp } from "../actions";

function NewAccountModal(props) {
    console.log(props)

    const [submitted, setSubmitted] = useState(false);
    const dispatch = useDispatch();
    const [user, setUser] = useState({
        first_name: '',
        last_name: '',
        date_of_birth: '',
        email: '',
        password: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(user)
        setSubmitted(true);
        dispatch(signUp(user, props.setModalOpenRegSuccess));
        props.modalRegisterClose();
    };

    const closeModal = (e) => {
        props.modalRegisterClose();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        //console.log(name)
        setUser(user =>
            ({ ...user, [name]: value }))
    }



    return (
        <Modal isOpen={props.modalOpenRegister}>
            <button onClick={closeModal} className="close-btn"></button>
            <div className="register-container">
                <h3>Create an Account</h3>
                <form name="form" className="register-form" onSubmit={handleSubmit}>
                    <div className="form-items">
                        <div className="form-item row">
                            <input className="item left" type="text" name="first_name" placeholder="First Name" onChange={handleChange} value={user.first_name} required />
                            <input className="item right" type="text" name="last_name" placeholder="Last Name" onChange={handleChange} value={user.last_name} required />
                        </div>
                        <input className="form-item right" type="text" name="date_of_birth" placeholder="Date of Birth" onChange={handleChange} value={user.date_of_birth} required />
                        <input className="form-item right" type="text" name="email" placeholder="Email Address" onChange={handleChange} value={user.email} required />
                        <input className="form-item right" type="password" name="password" placeholder="Password" onChange={handleChange} value={user.password} required />
                        <button type="submit" className="btn-account form-item">Create Account</button>
                    </div>
                </form>
            </div>
        </Modal>
    );
}

export default NewAccountModal;