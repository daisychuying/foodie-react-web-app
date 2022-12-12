import {useDispatch, useSelector} from "react-redux";
import {findUserByIdThunk, logoutThunk} from "./users-thunk";
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";
import {useEffect} from "react";
import {findFollowersThunk, findFollowingThunk, findUserHasFollowedThunk} from "../followers/follows-thunks";
import BookmarkCard from "../bookmarks/bookmark-card";

const Profile = () => {
    const navigate = useNavigate()
    const {currentUser} = useSelector((state) => state.users)
    const {followers, following} = useSelector((state) => state.follows)
    const {bookmarks} = useSelector(state => state.bookmarks);
    const dispatch = useDispatch()
    const handleLogoutBtn = () => {
        dispatch(logoutThunk())
        navigate('/login')
    }

    useEffect( () => {
        if (currentUser){
            dispatch(findFollowersThunk(currentUser._id))
            dispatch(findFollowingThunk(currentUser._id))
        }
    }, [])
    return (
        <div className="container">
            <h1>Profile</h1>
            {
                currentUser &&
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
                                            <Link to="/edit-profile" className="btn btn-primary me-2">Edit Profile</Link>
                                            <button className="btn btn-danger" onClick={handleLogoutBtn}> Logout </button>
                                        </div>

                                    </div>
                                    <div className="bg-light p-4 d-flex justify-content-end text-center">
                                        <ul className="list-inline mb-0">
                                            <li className="list-inline-item"><h5 className="font-weight-bold mb-0 d-block">215</h5>
                                                <small className="text-muted"> <i className="fas fa-image mr-1"></i>Collections</small>
                                            </li>
                                            <li className="list-inline-item"><h5 className="font-weight-bold mb-0 d-block">{followers.length}</h5>
                                                <small className="text-muted"> <i className="fas fa-user mr-1"></i>Followers</small>
                                            </li>
                                            <li className="list-inline-item"><h5 className="font-weight-bold mb-0 d-block">{following.length}</h5>
                                                <small className="text-muted"> <i className="fas fa-user mr-1"></i>Following</small>
                                            </li>
                                        </ul>
                                    </div>
                                    {currentUser.role == 'FOODIE' &&
                                        <div className="px-4 py-3"><h5 className="mb-0">About</h5>
                                            <div className="p-4 rounded shadow-sm bg-light">
                                                <p className="font-italic mb-0">Foodie Favorite:</p>
                                                <p className="font-italic mb-0">{currentUser.foodieFavorite}</p>
                                            </div>
                                        </div>}
                                    {currentUser.role == 'CHEF' &&
                                        <div className="px-4 py-3"><h5 className="mb-0">Chef Certificate:</h5>
                                            <div className="p-4 rounded shadow-sm bg-light">
                                                <p className="font-italic mb-0">Chef Certificate:</p>
                                                <p className="font-italic mb-0">{currentUser.certifiedChefID}</p>
                                            </div>
                                        </div>
                                    }

                                    <div className="py-4 px-4">
                                        <h5 className="mb-2">All collections</h5>
                                        <div className="p-3 rounded shadow-sm bg-light row">
                                            {bookmarks && bookmarks.map((bookmark, index) =>
                                                <BookmarkCard key={index} bookmark={bookmark}/>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            }
            { !currentUser &&
                <div>
                    <h2>Please Login to access your personal profile.</h2>
                </div>
            }
        </div>
    )
}

export default Profile;