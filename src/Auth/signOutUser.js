import { signOut  } from "firebase/auth";
import { auth } from "../fireBase";

const signOutUser = async (setIsLogged) => {
    try {
        const result = await signOut(auth);
        setIsLogged(false);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

export { signOutUser }