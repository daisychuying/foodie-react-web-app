import {loginThunk} from "./users-thunk";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import HomeNav from "../home-nav";


const Login = () => {
     const navigate = useNavigate()
     const [username, setUsername] = useState('')
     const [password, setPassword] = useState('')
     const [error, setError] = useState(null)
     const {currentUser} = useSelector((state) => state.users)
     const dispatch = useDispatch()

     const handleLoginBtn= async () =>{
         const loginUser = {username, password}
         await dispatch(loginThunk(loginUser))
         if (!currentUser) {
             setError("Invalid username or password")
         } else {
             navigate("/profile")
         }

     }
     useEffect( () => {
         if (currentUser) {
             navigate("/profile")
         }
     })

    return (
        <>
            <HomeNav/>
            <section className="h-100 h-custom">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-8 col-xl-6">
                            <div className="card rounded-3">
                                <img
                                    src="https://media.glamour.com/photos/6232428d3cd68a607606b849/master/w_1600%2Cc_limit/factor%2520healthy%2520meal%2520delivery.png"
                                    className="w-100"
                                    alt="Sample photo"/>
                                <div className="card-body p-4 p-md-5">
                                <h1 className="h3 mb-3 mt-5 fw-normal text-center">Please sign in</h1>
                                 {
                                     error &&
                                     <div className="alert alert-danger">
                                         {error}
                                     </div>
                                 }
                                 <div className="form-floating">
                                    <input
                                         className="form-control form-floating mb-2 "
                                         value={username}
                                         id="floatingInput"
                                         placeholder="Username"
                                         onChange={(e) => setUsername(e.target.value)}/>
                                    <label htmlFor="floatingInput">Username</label>
                                 </div>
                                 <div className="form-floating">
                                     <input
                                         type="password"
                                         className="form-control mb-2"
                                         value={password}
                                         placeholder="Password"
                                         onChange={(e) => setPassword(e.target.value)}/>
                                     <label htmlFor="floatingInput">Password</label>
                                 </div>
                                 <button
                                     onClick={handleLoginBtn}
                                     className='w-100 btn btn-lg btn-primary'>
                                     Sign in
                                 </button>
                                 {
                                    currentUser &&
                                    <h2>Welcome{currentUser.username}</h2>
                                 }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Login