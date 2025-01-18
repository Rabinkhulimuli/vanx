import { useContext } from 'react'
import{ Form,useLocation}  from 'react-router-dom'
import { UserContext } from './userContext'
import { useNavigate } from 'react-router-dom'
export function loader({request}){
    return URL(request.url).searchParams.get("message")
}
export function action(obj){
   console.log(obj)
    return null
}
export default function LogIn(){
    const {login,setLogin}= useContext(UserContext)
    const redirect=useNavigate()
    const handleSubmit=()=> {
        setLogin(true)
    }
    const location = useLocation();
    const message = location.state?.message || "Default message";
    if(login){
        return redirect("/")
    }
    return (
        <>
            <div>
                <p>Sign in to your account</p>
                {message && <p style={{color:"red"}} >{message} </p>}
                <Form onSubmit={(e)=> e.preventDefault()}>
                    <input type="email" placeholder="Email address" required/><br></br><br></br>
                    <input type="password" placeholder="Password" required/><br></br><br></br>
                    <input type="submit"  onClick={handleSubmit}  />
                </Form>
            </div>
        </>
    )
}
