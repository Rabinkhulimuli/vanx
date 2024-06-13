import {NavLink,Outlet} from 'react-router-dom'
export default function HostLayout(){
    const styles={
        backgroundColor:"red",
        fontSize:"1.1rem",
        color:"white",
        fontWeight:"bolder",
        textAlign:"center"
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