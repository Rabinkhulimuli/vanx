import {useParams,NavLink,Outlet,Link,useLoaderData} from 'react-router-dom'
import {GetVans} from '../api'
export async function loader(){
    return GetVans()
}
export default function VanDe(){
    const {id}=useParams()
   const current=useLoaderData()
    const styles1={
        backgroundColor:"red",
        fontSize:"1rem",
        color:"white",
        fontWeight:"bolder",
        textAlign:"center"
    }
   const data1=current.find((one)=> one.hostId==id)
    return (
        <div>
             <Link className="back-v" to=".." relative="path" >... Back to vans</Link>
            <div className="van-s-img-detail">
            <img width={200} src={data1.imageUrl} />
            <div>
                <p className="v-type">{data1.type} </p>
                <p>
                    {data1.name}
                </p>
                <p><span>$</span> {data1.price} <span>/Day</span></p>
            </div>
        </div>
        <div>
            <NavLink className="van-detail-link"  style={({isActive})=> isActive? styles1 : null } to="." end >Details</NavLink>
            <NavLink className="van-detail-link" style={({isActive})=> isActive? styles1 : null } to="pricing" >Pricing</NavLink>
            <NavLink className="van-detail-link" style={({isActive})=> isActive? styles1 : null} to="photos" >Photos</NavLink>
            <Outlet context={{data1}} />
        </div>
        </div>
    )
}