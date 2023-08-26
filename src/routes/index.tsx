import { Routes, Route } from 'react-router-dom'
import Redirect from '../pages/Redirect'
import { lazy } from 'react'

const Login = lazy(()=> import('../pages/Login') )
const Dashboard = lazy(()=> import('../pages/Dashboard') )

export default function MakeRoutes() {

    return (
        <Routes>
            <Route path='/login' Component={Login}/>
            <Route path='/dashboard' Component={Dashboard}/>
            <Route path='/*' Component={Redirect}/>
        </Routes>
    )
}