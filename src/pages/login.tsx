import {App} from "../services/index"
import { useContext } from "react"
import { AuthGoogleContext } from "../contexts/authGoogle"
import { Navigate } from "react-router-dom"

export default function Login() {
  const {signInGoogle,signed} = useContext(AuthGoogleContext)

  async function loginGoogle(){
    await signInGoogle()
  }

  if(!signed){
  return (
    <>
    <div>Login</div>
    <button onClick={()=> loginGoogle()}>Logar com o google</button>
    </>
  )
  }else{
    return <Navigate to="/home"/>
  }

}
