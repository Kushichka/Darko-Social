import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../fireBase";

const signIn = async (e, email, password, setIsLogged) => {
    e.preventDefault();

    try {
        const result = await signInWithEmailAndPassword(auth, email, password);
        setIsLogged(true);
        console.log(result.user);
    } catch (error) {
        setIsLogged(false);
        console.log(error);
    }
}

export { signIn }