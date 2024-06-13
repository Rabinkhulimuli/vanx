import { useOutletContext } from "react-router-dom"
export default function Photos(){
    const {data1}=useOutletContext()
    return (
        <>
            <p>This is photo section</p>
            <img className="van-s-img" src={data1.imageUrl} />
        </>
    )
}