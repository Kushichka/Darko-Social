import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../fireBase'

const signUp = async (e, email, password) => {
  e.preventDefault();
  
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    console.log(result.user);
  }
  catch (error) {
    console.log(error);
  };
}

export { signUp };