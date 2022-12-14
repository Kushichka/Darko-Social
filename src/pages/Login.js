import { useState } from "react";
import { signIn } from "../Auth/signIn";

const Login = ({setIsLogged}) => {

    const [emailValue, setEmailValue] = useState('');
    const [passValue, setPassValue] = useState('');

    return (
        <>
            <h1>Sign In</h1>
            <form>
                <input
                    type="email"
                    placeholder="email"
                    value={emailValue}
                    onChange={(e) => { setEmailValue(e.target.value) }}
                />
                <input
                    type="text"
                    placeholder="password"
                    value={passValue}
                    onChange={(e) => { setPassValue(e.target.value) }}
                />
                <button onClick={(e) => signIn(e, emailValue, passValue, setIsLogged)}>Sign In</button>
            </form>
        </>
    );
}

export default Login;