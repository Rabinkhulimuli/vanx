import {Link,useLocation,useLoaderData} from 'react-router-dom'
import {GetVansDetail} from './api'
export async function loader({params}){
    
    return GetVansDetail(params.id)
}
export default function Detail(){
    const sdata=useLoaderData()
    const location=useLocation()
    const stloc=location.state?.search || ""
    const all=location.state?.type || "all"
    return (
        <>
           <div>
            <Link to={`..${stloc}` }
            relative="path"
             >back to {all} vans</Link>
            <img className="van-img-i" src={sdata.imageUrl}/>
           <div className="van-back">
           <div className="pay">
                <p className="van-p">Name: {sdata.name}</p>
                <p className="van-p v-type">Type: {sdata.type} </p>
                <p className="van-p">Price:<span>$</span>{sdata.price}<sub>/Day</sub> </p>
               
            </div>
                 <button className="pay-btn"  >Book Now</button>
           </div>
                <p>{sdata.description}</p>
            </div>
        </>
    )
}