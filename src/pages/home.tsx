import React, { useContext } from 'react'
import { AuthGoogleContext } from '../contexts/authGoogle'

export default function Home() {
  const {user} = useContext(AuthGoogleContext)
  let userLogin = JSON.parse(user)
  return (
    <>
    <div>Home</div>
    <h1>bemvindo {userLogin.displayName}</h1>
    </>
  )
}
