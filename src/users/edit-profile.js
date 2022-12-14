import {Link} from "react-router-dom";
import {useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {updateUserThunk} from "./users-thunk";
import HomeNav from "../home-nav";

const EditProfile = () => {
    const navigate = useNavigate()
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()

    const [firstName, setFirstName] = useState(currentUser.firstName)
    const [lastName, setLastName] = useState(currentUser.lastName)
    const [email, setEmail] = useState(currentUser.email)
    const [password, setPassword] = useState(currentUser.password)
    const [foodieFav, setFoodieFav] = useState(currentUser.foodieFavorite)
    const [introduction, setIntroduction] = useState(currentUser.introduction)
    const [role, setRole] = useState(currentUser.role)
    const [adminsChoice, setAdminsChoice] = useState(currentUser.adminsChoice)
    const [error, setError] = useState('');

    const foodieFavs = ['CHINESE', 'JAPANESE','AMERICAN','ITALIAN','MEXICAN', 'SPANISH', 'THAI', 'FRENCH', 'KOREAN', 'BRITISH', 'MEDITERRANEAN', 'INDIAN', 'CARIBBEAN', 'GREEK', 'VIETNAMESE','AFRICAN'];
    const handleSaveButton = () => {
        if (password === ''){
            setError('Password cannot be empty')
        } else {
            const newProfile = {
                ...currentUser,
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
                foodieFavorite: foodieFav,
                adminsChoice: adminsChoice,
                introduction: introduction,
            }
            dispatch(updateUserThunk(newProfile))
            navigate('/profile')
        }

    }
    return (
        <div className="container">
            <HomeNav />
            {currentUser &&
                <div className="row py-2">
                    <div className="col-12 mx-auto">
                        <div className="bg-white shadow rounded overflow-hidden">
                            <div className="px-4 pt-3 pb-5 cover bg-warning">
                                <div className="mb-5 text-black">
                                    <h1 className="mt-0 mb-0">{currentUser.firstName} {currentUser.lastName}</h1>
                                    <h3 className="small mb-4">{currentUser.role}</h3>
                                </div>
                                <div className="float-end">
                                    <button onClick={handleSaveButton} className="btn btn-primary me-2">Save Profile</button>
                                </div>

                            </div>
                            <div className="px-4 py-3">
                                <h5 className="mb-1 ms-2">Profile Setting</h5>
                                {error && <h5 className="mb-1 ms-2 text-danger">{error}</h5>}
                                <div className="p-4 rounded shadow-sm bg-light">
                                    <div className="mb-3">
                                        <label htmlFor="firstName" className="form-label">First Name</label>
                                        <input onChange={(e) => setFirstName(e.target.value)}
                                               value={firstName} type="text" className="form-control" id="firstName"/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="lastName"
                                               className="form-label">Last Name</label>
                                        <input onChange={(e) => setLastName(e.target.value)}
                                               value={lastName} type="text" className="form-control" id="lastName"/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email"
                                               className="form-label">Email Address</label>
                                        <input onChange={(e) => setEmail(e.target.value)}
                                               value={email} type="email" className="form-control" id="email"/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password"
                                               className="form-label">User Password</label>
                                        <input onChange={(e) => setPassword(e.target.value)}
                                               value={password} type="password" className="form-control" id="password"/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="introduction"
                                               className="form-label">Introduction</label>
                                        <input onChange={(e) => setIntroduction(e.target.value)}
                                               value={introduction} type="text" className="form-control" id="introduction"/>
                                    </div>
                                    {role == 'ADMIN' &&
                                        <div className="mb-3">
                                            <label htmlFor="adminsChoice" className="form-label">Admin'S Choice </label>
                                            <input  onChange={(e) => setAdminsChoice(e.target.value)}
                                                     value={adminsChoice} className="form-control" name="adminsChoice" id="adminsChoice"></input>
                                        </div>}
                                    {role == 'FOODIE' &&
                                        <div className="mb-3">
                                            <label htmlFor="foodieFav" className="form-label">Foodie Favorite </label>
                                            <select  onChange={(e) => setFoodieFav(e.target.value)}
                                                     value={foodieFav} className="form-control" name="foodieFavorite" id="foodieFav">
                                                {foodieFavs.map((fav, index) =>
                                                    <option key={index} value={fav}>{fav}</option>
                                                )}
                                            </select>
                                        </div>}


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }

            { !currentUser &&
            <h3>Please login again to change the profile setting. </h3>
            }
        </div>
    )
}

export default EditProfile;