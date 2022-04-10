import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import auth from "../firebase.init";

const provider = new GoogleAuthProvider();

const useSignInWithGoogle = () => {
    const navigate = useNavigate();
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
        .then( () => {
            navigate('/home');
        });
    }

    return {signInWithGoogle};
}

export default useSignInWithGoogle;