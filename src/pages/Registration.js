import { useState } from "react";
import { signUp } from "../Auth/signUp";

const Registration = () => {

    const [passValue, setPassValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    return (
        <>
            <h1>Sign Up</h1>
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
                <button onClick={(e) => signUp(e, emailValue, passValue)}>Sign Up</button>
            </form>
        </>
    );
}

export default Registration;