import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {registerThunk} from "./users-thunk";

const Register = () => {
    const [username, setUsername] = useState('123')
    const [password, setPassword] = useState('1234')
    const [validatePassword, setValidatePassword] = useState("12344")
    const [error, setError] = useState(null)
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const handleRegisterBtn= () =>{
        if(password !== validatePassword){
            setError("Passwords must match")
            return
        }
        setError(null)
        const newUser = {username, password}
        dispatch(registerThunk(newUser))
    }

    return (
        <>
            <h1>Register</h1>
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
            <input
                className="form-control mb-2"
                value={validatePassword}
                onChange={(e)=> setValidatePassword(e.target.value)}/>
            <button
                onClick={handleRegisterBtn}
                className='btn btn-primary w-100'>
                Register
            </button>
            {
                currentUser &&
                <h2>Welcome{currentUser.username}</h2>
            }

        </>
    )
}

export default Register