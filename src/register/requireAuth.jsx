import {redirect} from 'react-router-dom'
export async function authenticate(){
    const loggedIn=false
    if (!loggedIn){
        throw redirect('/login')
    }
}