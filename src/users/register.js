import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {registerThunk} from "./users-thunk";
import {useNavigate} from "react-router";

const Register = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [validatePassword, setValidatePassword] = useState("")
    const [error, setError] = useState(null)
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [role, setRole] = useState('')
    const [certifiedChefID, setCertifiedChefID] = useState('')
    const [foodieFavorite, setFoodieFavorite] = useState('')
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const foodieType = ['CHINESE', 'JAPANESE','AMERICAN','ITALIAN','MEXICAN', 'SPANISH', 'THAI', 'FRENCH', 'KOREAN', 'BRITISH', 'MEDITERRANEAN', 'INDIAN', 'CARIBBEAN', 'GREEK', 'VIETNAMESE','AFRICAN']
    const options = ['FOODIE',"CHEF"]
    const [selected, setSelected] = useState('Select your role')
    const handleRegisterBtn= () =>{
        if(password !== validatePassword){
            setError("Passwords must match")
            return
        }
        setError(null)
        const newUser = {username, password, email, firstName, lastName, role, certifiedChefID,foodieFavorite}
        dispatch(registerThunk(newUser))
    }

    useEffect( () => {
        if (currentUser) {
            navigate('/profile')
        }
    }, [])
    return (
        <>
            <h1>Register</h1>
            {
                error &&
                <div className="alart alert-danger">
                    {error}
                </div>
            }
            <label className ="mb-2">Username :</label>
            <input
                className="form-control mb-2"
                value = {username}
                onChange={(e) => setUsername(e.target.value)}/>
            <label className ="mb-2">Password :</label>
            <input
                className="form-control mb-2"
                value = {password}
                onChange={(e) => setPassword(e.target.value)}/>
            <label className ="mb-2">Re-enter your password :</label>
            <input
                className="form-control mb-2"
                value={validatePassword}
                onChange={(e)=> setValidatePassword(e.target.value)}/>
            <label className ="mb-2">Email :</label>
            <input
                className="form-control mb-2"
                value = {email}
                onChange={(e) => setEmail(e.target.value)}/>
            <label className ="mb-2">First Name :</label>
            <input
                className="form-control mb-2"
                value = {firstName}
                onChange={(e) => setFirstName(e.target.value)}/>
            <label className ="mb-2">Last Name :</label>
            <input
                className="form-control mb-2"
                value = {lastName}
                onChange={(e) => setLastName(e.target.value)}/>

            <label htmlFor="roles" className="mb-2">Choose a role:</label>
            <form className="mb-2">
                <select
                    value={role}
                    onChange={e => setRole(e.target.value)}>
                    {options.map((value) => (
                        <option value={value} key={value}>
                            {value}
                        </option>
                    ))}
                </select>
            </form>
            {
                role === 'CHEF'&&
                <div>
                    <label className ="mb-2">Your certified Chef ID :</label>
                    <input
                        className="form-control mb-2"
                        value = {certifiedChefID}
                        onChange={(e) => setCertifiedChefID(e.target.value)}/>
                </div>
            }
            {
                role ==='FOODIE'&&
                <div>
                    <label className ="mb-2">Your Favorite Food type :</label>
                    <form className="mb-2">
                        <select
                            value={foodieFavorite}
                            onChange={e => setFoodieFavorite(e.target.value)}>
                            {foodieType.map((value) => (
                                <option value={value} key={value}>
                                    {value}
                                </option>
                            ))}
                        </select>
                    </form>
                </div>
            }
            <button
                onClick={handleRegisterBtn}
                className='btn btn-primary w-100'>
                Register
            </button>

            {
                currentUser &&
                <h2>Welcome  {currentUser.username}</h2>
            }

        </>
    )
}

export default Register