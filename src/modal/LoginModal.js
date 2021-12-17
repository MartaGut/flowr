import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from '../actions/index';
import { connect } from "react-redux";
import Modal from 'react-modal';

function LoginModal(props) {
    console.log(props)

    const [submitted, setSubmitted] = useState(false);
    const [isLoggedIn, setIsLoggedin] = useState(false);
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        setSubmitted(true);
        setIsLoggedin(true);
        dispatch(logIn(email, password, props.setModalOpenSuccess))
        props.modalClose();
    }

    const closeModal = () => {
        props.modalClose();
    }

    return (
        <div>
            <Modal isOpen={props.kk} ariaHideApp={false} style={{
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
                    height: '290px',
                    border: '1px solid #ccc',
                    background: '#fff',
                    outline: 'none',
                    margin: '0 auto',
                    top: '21%'
                }
            }}>
                <button onClick={closeModal} className="close-btn"></button>
                <h3>Welcome Back</h3>
                <form name="loginForm" className="login-form" onSubmit={handleSubmit}>
                    <input type="text" required className="form-item" name="email" placeholder="Email Address" onChange={(e) => {
                        setEmail(e.target.value)
                        console.log(e.target.value)
                    }} value={email} />
                    <input type="password" required className="form-item" name="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} value={password} />
                    <button type="submit" className="login-btn">Login to your Account</button>
                </form>
            </Modal>
        </div>
    );
}


const mapStateToProps = state => {
    return {
        // token: state.authentication.token
    };
};

export default connect(mapStateToProps)(LoginModal);