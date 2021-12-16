import { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../actions";
import Modal from "react-modal";


function SignIn(props) {

    console.log(props);

    const [submitted, setsubmitted] = useState(false);
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

        setsubmitted(true);

        dispatch(logIn)
    }

    return (
        <div>
            <Modal isOpen={props.modalOpenRegister}>
                HIIIIIIIII
            </Modal>
        </div>
    )
}

export default SignIn;
