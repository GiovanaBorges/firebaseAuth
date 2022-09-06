import {GoogleAuthProvider,getAuth, signInWithPopup,} from "firebase/auth"
import { useEffect, useState } from "react"
import { createContext } from "react"
import {App} from "../services/index"
import {LocalStorage} from "../services/localstorage"
const provider = new GoogleAuthProvider()

export const AuthGoogleContext = createContext<any>({})

export const AuthGoogleProvider = ({children}:any) => {
    const [user,setUser] = useState<any>()
    const localstorage = new LocalStorage()

    useEffect(() => {
      const loadStorageAuth = () =>{
        const sessionToken = localstorage.getStorageToken("@AuthFirebase:token")
        const sessionUser = localstorage.getStorageUser("@AuthFirebase:user")
        if(sessionToken && sessionUser){
          setUser(sessionUser)
        }
      }
      loadStorageAuth()
    },[])

    const signInGoogle = () =>{
        const auth = getAuth(App);
        signInWithPopup(auth, provider)
          .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken;
            const userGoogle = result.user;
            setUser(userGoogle)
            localstorage.setStorageToken("@AuthFirebase:token",token)
            localstorage.setStorageUser("@AuthFirebase:user",JSON.stringify(userGoogle))
          }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
          });
}

return (
    <AuthGoogleContext.Provider value={{signInGoogle,signed:!!user,user}}>
      {children}
    </AuthGoogleContext.Provider>
)
}