import {Link,Outlet,NavLink} from 'react-router-dom' 
 export const Layout=()=> {
    return (
        
        <>
            <nav>
                <div className="layout">
                    <Link className="layout-li" to="/">Home</Link> 
                    <Link className="layout-li" to="/about">About</Link>
                    <Link className="layout-li" to="/vans">Vans</Link> 
                    <NavLink className="layout-li" to="host">Host</NavLink>
                    <NavLink className="layout-li" to="login">LogIn</NavLink>
                </div>
                
            </nav>
            <Outlet/>
            <div className="home-color">2020/2040</div>
        </>
    )
}