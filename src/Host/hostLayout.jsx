import { useContext } from 'react'
import {NavLink,Outlet,useNavigate} from 'react-router-dom'
import { UserContext } from '../register/userContext'
export default function HostLayout(){
    const styles={
        backgroundColor:"red",
        fontSize:"1.1rem",
        color:"white",
        fontWeight:"bolder",
        textAlign:"center"
    }
    const redirect=useNavigate()
    const {login}=useContext(UserContext)
    if(!login){
        return redirect("/login", { state: { message: "You must login to enter host" } });

    }
    return(
        <>
            <div>
                <NavLink style={({isActive})=> isActive? styles:null} end className="host-layout" to="/host">Dashboard</NavLink>
                <NavLink style={({isActive})=> isActive? styles:null} className="host-layout" to ="income">Income</NavLink>
                <NavLink style={({isActive})=> isActive? styles:null} className="host-layout" to="van">Vans</NavLink>
                <NavLink style={({isActive})=> isActive? styles:null} className="host-layout" to="review">Review</NavLink>
                <Outlet/>
            </div>
        </>
    )
}