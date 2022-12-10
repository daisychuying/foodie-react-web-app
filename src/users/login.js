import {loginThunk} from "./users-thunk";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";


const Login = () => {
     const [username, setUsername] = useState('Username')
     const [password, setPassword] = useState('Password')
     const [error, setError] = useState(null)
     const {currentUser} = useSelector((state) => state.users)
     const dispatch = useDispatch()
     const handleLoginBtn= () =>{
         setError(null)
         const loginUser = {username, password}
         dispatch(loginThunk(loginUser))
         //if login unsuccessful set error and display
         if(!currentUser){
             setError("Invalid username or password")
         }else{
             setError(null)
         }

     }

    return (
        <>
            <h1>User login</h1>
             {
                 error &&
                 <div className="alart alert-danger">
                     {error}
                 </div>
             }
             <input
                 className="form-control mb-2"
                 value = {username}
                 onChange={(e) => setUsername(e.target.value)}/>
             <input
                 className="form-control mb-2"
                 value = {password}
                 onChange={(e) => setPassword(e.target.value)}/>
             <button
                 onClick={handleLoginBtn}
                 className='btn btn-primary w-100'>
                 Login
             </button>
            {
                currentUser &&
                <h2>Welcome{currentUser.username}</h2>
            }

        </>
    )
}

export default Login