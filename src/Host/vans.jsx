import {useEffect,useState} from 'react'
import {Link ,useLoaderData} from 'react-router-dom'
import {GetVans} from '../api'

export async function loader(){
    return GetVans()
}
export default function Van(){
    const sdata=useLoaderData()
    const element= ()=> sdata.map((data)=> {
        return <div key={data.id}>
                <Link to={data.hostId} >
                    <div  className="host-s-van" >
                         <img className="host-s-img"  src={data.imageUrl} />
                        <div className="host-s-div">
                            <p className="host-s-name" >{data.name}</p>
                            <p className="host-s-price" ><span>$</span> {data.price} <sub>/day</sub> </p>
                            </div>
                    </div>
                </Link>
            </div>
    })
    return (
        <>
           {sdata? <div>
                <h2>Your Listed Vans</h2>
                
               {element()}
                
            </div>:<h2>Loading...</h2>}
        </>
    )
}