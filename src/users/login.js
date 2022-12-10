import {loginThunk} from "./users-thunk";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router";


const Login = () => {
     const navigate = useNavigate()
     const [username, setUsername] = useState('Username')
     const [password, setPassword] = useState('Password')
     const [error, setError] = useState(null)
     const {currentUser} = useSelector((state) => state.users)
     const dispatch = useDispatch()
     const handleLoginBtn= () =>{
         const loginUser = {username, password}
         dispatch(loginThunk(loginUser))
         if (!currentUser) {
             setError("Invalid username or password")
         }
     }
     useEffect( () => {
         if (currentUser) {
             navigate("/profile")
         }
     })

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