import{ Form}  from 'react-router-dom'
export function loader({request}){
    return URL(request.url).searchParams.get("message")
}
export function action(obj){
    console.log(obj)
    return null
}
export default function LogIn(){

    return (
        <>
            <div>
                <p>Sign in to your account</p>
                <Form >
                    <input type="email" placeholder="Email address" required/><br></br><br></br>
                    <input type="password" placeholder="Password" required/><br></br><br></br>
                    <input type="submit" />
                </Form>
            </div>
        </>
    )
}
