import { Routes, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'

export default function MakeRoutes() {

    return (
        <Routes>
            <Route path='/login' Component={Login}/>
            <Route path='/dashboard' Component={Dashboard}/>
        </Routes>
    )
}