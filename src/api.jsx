import './server'
export async function GetVans(){
    const response= await fetch("/api/vans")
    if (!response.ok){
        throw {
            message:"There was an error",
            statusText:response.statusText,
            status:response.status
        }
    }
    const data= await response.json()
    return data.vans

}
export async function GetVansDetail(id){
    const response =await fetch(`/api/vans/${id}`)
    if (!response.ok){
        throw {
            message:"There is an error",
            statusText:response.statusText,
            status:response.status
        }
    }
    const data=await response.json()
    return data.vans
}