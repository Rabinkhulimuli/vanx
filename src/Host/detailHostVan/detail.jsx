import {useOutletContext} from 'react-router-dom'
export default function DetailVan(){
    const {data1}=useOutletContext()
    return (
        <>
            <p>This is Detail section</p>
            <p>Name: {data1.name}</p>
            <p>Categories: <span className="v-type">{data1.type}</span> </p>
            <p>{data1.description} </p>
            <p>Visibility: Public</p>

        </>
    )
}