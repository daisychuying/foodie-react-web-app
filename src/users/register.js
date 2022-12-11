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
                                        <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Registration Info</h3>

                                        <form className="px-md-2">

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
                                            <br/>
                                            <select
                                                value={role}
                                                onChange={e => setRole(e.target.value)}>
                                                <option key='0'>Please selection from the following</option>
                                                {options.map((value) => (
                                                    <option value={value} key={value}>
                                                        {value}
                                                    </option>
                                                ))}
                                            </select>
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
                                                    <br/>
                                                    <select
                                                        value={foodieFavorite}
                                                        onChange={e => setFoodieFavorite(e.target.value)}>
                                                        <option key='0'>Please selection from the following: </option>
                                                        {foodieType.map((value) => (
                                                            <option value={value} key={value}>
                                                                {value}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            }
                                            <button
                                                onClick={handleRegisterBtn}
                                                className='btn btn-success w-100'>
                                                Register
                                            </button>

                                            {
                                                currentUser &&
                                                <h2>Welcome  {currentUser.username}</h2>
                                            }

                                        </form>

                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Register