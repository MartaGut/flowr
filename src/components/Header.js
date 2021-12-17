import React, { useState } from 'react';
import logo from '../assets/img/flowr-logo.png';
import { Link } from 'react-router-dom';
import LoginModal from '../modal/LoginModal';
import ProfileModal from "./ProfileModal";
import LoginSuccessModal from '../modal/LoginSuccessModal';
import NewAccountModal from './NewAccountModal';
import SignUpSuccessModal from '../modal/SignUpSuccessModal';
import { useSelector, useDispatch } from "react-redux";
import { loggedUserInfo, signOut } from '../actions/index';
import VezbaModal from '../modal/VezbaModal';


function Header() {

    const [modalOpen, setModalOpen] = useState(false);
    const [modalOpenRegSuccess, setModalOpenRegSuccess] = useState(false);
    const [modalOpenRegister, setModalOpenRegister] = useState(false);
    const [modalUserInfo, setModalUserInfo] = useState(false);
    const [modalOpenSuccess, setModalOpenSuccess] = useState(false);
    const [vezbaModal, setVezbaModal] = useState(false);
    const token = useSelector(state => state.authReducer.token);
    const dispatch = useDispatch();

    console.log(token);

    function sign_Out() {
        dispatch(signOut())
    }

    return (
        <header className="app-header wrapper">
            <div className="app-header-logo">
                <a className="app-header-logo-link" >
                    <img className="app-header-logo-img" src={logo} alt="Logo" />
                </a>
            </div>

            <button onClick={() => setVezbaModal(true)}>
                Marta
            </button>

            {
                VezbaModal &&
                <VezbaModal
                    vezbaModal={vezbaModal}
                    closeVezba={() => setVezbaModal(false)}
                />
            }


            <div className="app-header-navigation">
                <ul className="app-header-list">
                    <li className="app-header-item"><Link className="app-header-link" to="/">Flowers</Link></li>
                    <li className="app-header-item"><Link className="app-header-link" to="/latest-sightings">Latest Sightings</Link></li>
                    <li className="app-header-item"><Link className="app-header-link" to="/favorites">Favorites</Link></li>
                    <li className="app-header-item app-header-item-pink">
                        {!token ?
                            <a className="app-header-link pink" onClick={() => setModalOpen(true)}>Login</a>
                            :
                            <a className="app-header-link pink" onClick={sign_Out}>Logout</a>
                        }

                        {
                            modalOpen &&
                            <LoginModal
                                setModalOpenSuccess={setModalOpenSuccess}
                                kk={modalOpen}
                                modalClose={() => setModalOpen(false)}
                            />
                        }

                        {
                            modalOpenSuccess ? (
                                <LoginSuccessModal modalOpenSuccess={modalOpenSuccess} setModalUserInfo={setModalUserInfo} modalCloseSuccess={() => setModalOpenSuccess(false)} />
                            ) : null
                        }
                    </li>
                    <li className="app-header-item">
                        {
                            'token' ? (
                                <p>{loggedUserInfo}</p>
                            ) : null
                        }
                        {/* <a className="app-header-link" href="">New Account</a> */}
                    </li>
                    {
                        // 'token' === "" ? (
                        <button
                            onClick={() => setModalOpenRegister(true)} className="btn new-acc-btn">
                            New Account
                        </button>
                        // ) : null
                    }
                </ul>

                {modalOpenRegister ? (
                    <NewAccountModal modalOpenRegister={modalOpenRegister} setModalOpenRegSuccess={setModalOpenRegSuccess} modalRegisterClose={() => setModalOpenRegister(false)} />
                ) : null
                }
                {modalOpenRegSuccess ? (
                    <SignUpSuccessModal setModalOpenRegSuccess={setModalOpenRegSuccess} modalRegOpenSuccess={modalOpenRegSuccess} setModalOpen={setModalOpen} />
                ) : null
                }
                {
                    modalUserInfo && (
                        <ProfileModal modalUserInfo={modalUserInfo} closeModalUserInfo={setModalUserInfo} />
                    )
                }
            </div>
        </header >
    );
}

export default Header;