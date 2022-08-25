import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./Auth/fireBaseConfig";
import { getAuth } from "firebase/auth";

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };