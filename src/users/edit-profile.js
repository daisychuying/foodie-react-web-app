import {Link} from "react-router-dom";
import {useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {updateUserThunk} from "./users-thunk";

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
    const [error, setError] = useState('');

    const foodieFavs = ['CHINESE', 'JAPANESE','AMERICAN','ITALIAN','MEXICAN', 'SPANISH', 'THAI', 'FRENCH', 'KOREAN', 'BRITISH', 'MEDITERRANEAN', 'INDIAN', 'CARIBBEAN', 'GREEK', 'VIETNAMESE','AFRICAN'];
    const handleSaveButton = () => {
        if (error == ''){
            setError('Password cannot be empty')
        } else {
            const newProfile = {
                ...currentUser,
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
                foodieFavorite: foodieFav,
            }
            dispatch(updateUserThunk(newProfile))
            navigate('/profile')
        }

    }
    return (
        <>
            {currentUser &&
                <div>
                    <div>
                        <div className="row py-5 px-4">
                            <div className="col-md-10 mx-auto">
                                <div className="bg-white shadow rounded overflow-hidden">
                                    <div className="px-4 pt-3 pb-5 cover bg-black">
                                        <div className="mb-5 text-white">
                                            <h4 className="mt-0 mb-0">{currentUser.firstName} {currentUser.lastName}</h4>
                                            <p className="small mb-4">{currentUser.role}</p>
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
                    </div>

                </div>
            }

            { !currentUser &&
            <h3>Please login again to change the profile setting. </h3>
            }
        </>
    )
}

export default EditProfile;