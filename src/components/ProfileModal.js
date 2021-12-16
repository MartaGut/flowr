import React, { useEffect } from "react";
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { loggedUserInfo, signOut } from '../actions/index';


function ProfileModal(props) {

    // const token = useSelector(state => state.authentication.token);
    //  const userInfo = useSelector(state => state.authentication.logged_user)

    const dispatch = useDispatch();

    const logout = (e) => {
        e.preventDefault();
        dispatch(signOut());
    }

    const closeModal = () => {
        props.closeModalUserInfo(false);
    }

    useEffect(() => {
        // const user = dispatch(loggedUserInfo(token));
        // return user;
    }, [])


    return (
        <div>
            <Modal isOpen={props.modalUserInfo}>
                <button onClick={closeModal} className="close-btn"></button>
                <button className="btn-logout" onClick={logout}>Logout</button>
            </Modal>
        </div>
    );
}

export default ProfileModal;