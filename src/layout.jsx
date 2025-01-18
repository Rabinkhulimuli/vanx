import { useContext } from 'react'
import {Link,Outlet,NavLink} from 'react-router-dom' 
import { UserContext } from './register/userContext'
 export const Layout=()=> {
    const {login,setLogin}= useContext(UserContext)
    return (
        
        <>
            <nav>
                <div className="layout">
                    <Link className="layout-li" to="/">Home</Link> 
                    <Link className="layout-li" to="/about">About</Link>
                    <Link className="layout-li" to="/vans">Vans</Link> 
                    <NavLink className="layout-li" to="host">Host</NavLink>
                    {login ? <button
                    onClick={()=> setLogin(false)}
                    className="layout-li">Logout</button>:<NavLink className="layout-li" to="login">LogIn</NavLink>}
                </div>
                
            </nav>
            <Outlet/>
            <div className="home-color">2020/2040</div>
        </>
    )
}