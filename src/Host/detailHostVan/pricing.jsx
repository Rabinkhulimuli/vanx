import { useOutletContext } from "react-router-dom"
export default function Pricing(){
    const {data1}=useOutletContext()
    return (
        <>
            <p>This is pricing section</p>
            <p><span>$</span>{data1.price}/Day </p>
        </>
    )
}