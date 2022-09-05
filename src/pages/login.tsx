import {GoogleAuthProvider,getAuth, signInWithPopup,} from "firebase/auth"
const provider = new GoogleAuthProvider()

export default function Login() {
  const signInGoogle = () =>{
    
const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken ;
    const user = result.user;
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
  });
  }
  
    return (
    <div>Login</div>
  )
}
