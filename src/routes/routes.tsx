import React, { Fragment } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { PrivateRoutes } from '.'
import Home from "../pages/home"
import Login from "../pages/login"

export default function AppRoutes() {
  return (
    <BrowserRouter>
    <Fragment>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/home" element={<PrivateRoutes/>}>
              <Route path="/home" element={<Home/>}/>
            </Route>
        </Routes>
    </Fragment>
    </BrowserRouter>
  )
}
