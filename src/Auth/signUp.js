import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from "firebase/firestore";

import { auth, db } from '../fireBase'

const signUp = async (e, email, password) => {
  e.preventDefault();

  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);

    await setDoc(doc(db, "users", result.user.uid), {
      email: email
    });

    console.log('done');
  }
  catch (error) {
    console.log(error);
  };
  
}

export { signUp };