import {GetVans} from './api'
import React from 'react'
import './server'
import {Link,useSearchParams,useLoaderData} from "react-router-dom"
export async function loader(){
    return GetVans()
}
export default function Vans(){
    
    const [search,setSearch]=React.useState("")
    const [toggle,setToggle]=React.useState({vansD:[],type:"name",tog:true,clicked:false})
    const [param,setParam]=useSearchParams()
   
    const vanData=useLoaderData()
    const filterSe= param.get("type")
    function handleChange(event){
        const text=event.target.value
        
        setToggle((prev)=> {
            return {...prev,vansD:vanData.filter((van)=> toggle.type=="name" ? van.name.toLowerCase().includes(text.toLowerCase()):van.type.toLowerCase().includes(text.toLowerCase()) )}
        })
        setSearch(text)
    }
    const newElement=search?toggle.vansD :  filterSe? vanData.filter((van)=> van.type==filterSe) : vanData
    
    const element=newElement.map((van)=> <div key={van.id} >
           <div className="van">
               <Link to={van.id} state={{search:`?${param.toString()}`,
                type:filterSe   
            }
            } >
               <img className="van-img" src={van.imageUrl}/>
                 <div>
                     <p className="van-p" >{van.name} </p>
                     <p className="van-p" >{van.price} </p>
                     <p className="van-p" >{van.type} </p>
                 </div>
               </Link>
           </div>
    </div>)
    function typeClicked(key,value){
       setParam((prev)=>{
        if (value===null){
            prev.delete(key)
        }
        else{
            prev.set(key,value)
        }
        return prev
       })
    }

    return (
        <div>
                <h2>Explore our van options</h2>
                <input type="text" name="search" value={search} onChange={handleChange} />
                <div className="below-me">
                
                <button className="btn" onClick={()=> setToggle((prev)=> { return {...prev,tog: !prev.tog}})} >Search By</button>
                <div className="type-h" style={ {display: toggle.tog? "none":"block"}} >
                    <p  className="type-h1" onClick={()=> setToggle((prev)=> { return {...prev,type:"name",tog:!prev.tog}})} >Name</p>
                    <p  className="type-h1" onClick={()=> setToggle((prev)=> { return {...prev,type:"type",tog:!prev.tog}})} >Type</p>
                </div>
                </div>
                <div>
                <button className={`van-type-search ${filterSe && filterSe=="simple"?"active":""}`} onClick={()=> typeClicked("type","simple")} >Simple</button>
                <button className={`van-type-search ${filterSe && filterSe=="rugged"?"active":""}`} onClick={()=> typeClicked("type","rugged")} >rugged</button>
                <button className={`van-type-search ${filterSe && filterSe=="luxury"?"active":""}`} onClick={()=> typeClicked("type","luxury")} >luxury</button>
                <button className={`van-type-search`} onClick={()=> typeClicked("type",null)} >clear</button>
                </div>
               <div className="van-d">
                {element}
               </div>
            </div>
    )
}