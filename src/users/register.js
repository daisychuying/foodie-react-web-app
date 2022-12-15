import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {registerThunk} from "./users-thunk";
import {useNavigate} from "react-router";
import HomeNav from "../home-nav";

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
    const [introduction, setIntroduction] = useState('')
    const {currentUser, registrationError} = useSelector((state) => state.users)

    const dispatch = useDispatch()
    const foodieType = ['CHINESE', 'JAPANESE','AMERICAN','ITALIAN','MEXICAN', 'SPANISH', 'THAI', 'FRENCH', 'KOREAN', 'BRITISH', 'MEDITERRANEAN', 'INDIAN', 'CARIBBEAN', 'GREEK', 'VIETNAMESE','AFRICAN']
    const options = ['FOODIE',"CHEF"]

    const handleRegisterBtn= async () =>{
        if (username === '' || password === '' || email === ''){
            setError('Username, password, and email cannot be null!')
        } else if(password !== validatePassword){
            setError("Passwords must match.")
        } else if (role === ''){
            setError("You need to choose a role to register an account.")
        } else if (role === 'CHEF' && certifiedChefID === ''){
            setError('You need to enter your certified chef ID to register an CHEF account.')
        } else {
            const newUser = {username, password, email, firstName, lastName, role, certifiedChefID,foodieFavorite, introduction}
            await dispatch(registerThunk(newUser))
            if (currentUser) {
                navigate("/profile")
            }
        }
    }

    useEffect( () => {
        if (currentUser) {
            navigate('/profile')
        }
    }, [])
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
                                        <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Registration Info</h3>

                                        <div className="px-md-2">
                                            {
                                                registrationError &&
                                                <div className="alart text-danger">
                                                    Username already existed.
                                                </div>
                                            }
                                            {
                                            error &&
                                            <div className="alart text-danger">
                                                {error}
                                            </div>
                                            }
                                            <div className="form-floating">
                                                <input
                                                    className="form-control form-floating mb-2 "
                                                    value={username}
                                                    id="username"
                                                    placeholder="Username"
                                                    onChange={(e) => setUsername(e.target.value)}/>
                                                <label htmlFor="username">Username</label>
                                            </div>
                                            <div className="form-floating">
                                                <input
                                                    className="form-control mb-2"
                                                    value={password}
                                                    type="password"
                                                    id='password'
                                                    placeholder="Password"
                                                    onChange={(e) => setPassword(e.target.value)}/>
                                                <label htmlFor="password">Password</label>
                                            </div>
                                            <div className="form-floating">
                                                <input
                                                    className="form-control mb-2"
                                                    value={validatePassword}
                                                    type="password"
                                                    id='validatePassword'
                                                    placeholder="Re-enter your password"
                                                    onChange={(e) => setValidatePassword(e.target.value)}/>
                                                <label htmlFor="validatePassword">Re-enter your password</label>
                                            </div>
                                            <div className="form-floating">
                                                <input
                                                    className="form-control mb-2"
                                                    value={email}
                                                    id='email'
                                                    placeholder="Email"
                                                    onChange={(e) => setEmail(e.target.value)}/>
                                                <label htmlFor="email">Email Address</label>
                                            </div>
                                            <div className="form-floating">
                                                <input
                                                    className="form-control mb-2"
                                                    value={firstName}
                                                    id='firstName'
                                                    placeholder="First Name"
                                                    onChange={(e) => setFirstName(e.target.value)}/>
                                                <label htmlFor="firstName">First Name</label>
                                            </div>
                                            <div className="form-floating">
                                                <input
                                                    className="form-control mb-2"
                                                    value={lastName}
                                                    id='lastName'
                                                    placeholder="Last Name"
                                                    onChange={(e) => setLastName(e.target.value)}/>
                                                <label htmlFor="lastName">Last Name</label>
                                            </div>
                                            <div className="form-floating">
                                                <textarea
                                                    className="form-control mb-2"
                                                    value={introduction}
                                                    id='introduction'
                                                    placeholder="Introduction"
                                                    onChange={(e) => setIntroduction(e.target.value)}/>
                                                <label htmlFor="introduction">Introduction</label>
                                            </div>

                                            <label htmlFor="roles" className="mb-2 ms-1 mt-2 fw-bold">Choose a role:</label>
                                            <br/>
                                            <select
                                                className="form-control"
                                                value={role}
                                                onChange={e => setRole(e.target.value)}>
                                                <option key='0' value=''>Please selection from the following</option>
                                                {options.map((value, index) => (
                                                    <option value={value} key={index}>
                                                        {value}
                                                    </option>
                                                ))}
                                            </select>
                                            {
                                                role === 'CHEF'&&
                                                <div>
                                                    <label className ="mb-2 ms-1 mt-2 fw-bold">Your certified Chef ID :</label>
                                                    <input
                                                        className="form-control mb-2"
                                                        value = {certifiedChefID}
                                                        onChange={(e) => setCertifiedChefID(e.target.value)}/>
                                                </div>
                                            }
                                            {
                                                role ==='FOODIE'&&
                                                <div>
                                                    <label className ="mb-2 ms-1 mt-2 fw-bold">Your Favorite Food type :</label>
                                                    <br/>
                                                    <select
                                                        className="form-control"
                                                        value={foodieFavorite}
                                                        onChange={e => setFoodieFavorite(e.target.value)}>
                                                        <option key='0' value=''>Please selection from the following: </option>
                                                        {foodieType.map((value, index) => (
                                                            <option value={value} key={index}>
                                                                {value}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            }
                                            <button
                                                onClick={handleRegisterBtn}
                                                className='btn btn-success w-100 mt-3'>
                                                Register
                                            </button>
                                        </div>
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