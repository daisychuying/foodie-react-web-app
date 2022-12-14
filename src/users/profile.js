import {useDispatch, useSelector} from "react-redux";
import {logoutThunk} from "./users-thunk";
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";
import {useEffect} from "react";
import {findFollowersThunk, findFollowingThunk} from "../followers/follows-thunks";
import BookmarkCard from "../bookmarks/bookmark-card";
import {findBookmarksByUserThunk} from "../bookmarks/bookmarks-thunks";
import {findPostsByUserThunk} from "../posts/posts-thunks";
import PostCard from "../posts/post-card";
import HomeNav from "../home-nav";

const Profile = () => {
    const navigate = useNavigate()
    const {currentUser} = useSelector((state) => state.users)
    const {followers, following} = useSelector((state) => state.follows)
    const {bookmarks} = useSelector(state => state.bookmarks);
    const {postsByUser} = useSelector(state => state.posts);

    const dispatch = useDispatch()
    const handleLogoutBtn = () => {
        dispatch(logoutThunk())
        navigate('/')
    }

    useEffect( () => {
        if (currentUser){
            dispatch(findFollowersThunk(currentUser._id))
            dispatch(findFollowingThunk(currentUser._id))
            dispatch(findBookmarksByUserThunk(currentUser._id))
            dispatch(findPostsByUserThunk(currentUser._id))
        }
    }, [])
    return (
        <div className="container">
            <HomeNav />
            {
                currentUser &&
                <div>
                    <div>
                        <div className="row py-2">
                            <div className="col-12 mx-auto">
                                <div className="bg-white shadow rounded overflow-hidden">
                                    <div className="px-4 pt-3 pb-5 cover bg-warning">
                                        <div className="mb-5 text-black">
                                            <h1 className="mt-0 mb-0">{currentUser.firstName} {currentUser.lastName}</h1>
                                            <h3 className="small mb-4">{currentUser.role}</h3>
                                        </div>
                                        <div className="float-end">
                                            <Link to="/edit-profile" className="btn btn-info me-2">Edit Profile</Link>
                                            <button className="btn btn-danger" onClick={handleLogoutBtn}> Logout </button>
                                        </div>

                                    </div>
                                    <div className="bg-light p-3 d-flex justify-content-end text-center">
                                        <ul className="list-inline mb-0">
                                            <li className="list-inline-item"><h5 className="font-weight-bold mb-0 d-block">{bookmarks.length}</h5>
                                                <small className="text-muted"> <i className="fas fa-image mr-1"></i>Collections</small>
                                            </li>
                                            <Link to={`/follower/${currentUser._id}`} className="list-inline-item  text-decoration-none"><h5 className="font-weight-bold mb-0 d-block text-black">{followers.length}</h5>
                                                <small className="text-muted"> <i className="fas fa-user mr-1"></i>Followers</small>
                                            </Link>
                                            <Link to={`/following/${currentUser._id}`} className="list-inline-item text-decoration-none"><h5 className="font-weight-bold mb-0 d-block text-black">{following.length}</h5>
                                                <small className="text-muted"> <i className="fas fa-user mr-1"></i>Following</small>
                                            </Link>
                                        </ul>
                                    </div>

                                    <div className="px-4 py-3"><h5 className="mb-0">Introduction</h5>
                                        <div className="p-4 rounded shadow-sm bg-light">
                                            <p className="font-italic mb-0">{currentUser.introduction}</p>
                                        </div>
                                    </div>

                                    <div className="px-4 py-3"><h5 className="mb-0">About</h5>
                                        <div className="p-4 rounded shadow-sm bg-light">
                                            {currentUser.role === 'ADMIN' &&
                                                <p className="font-italic mb-0">Admin's Choice: {currentUser.adminsChoice}</p>}
                                            {currentUser.role === 'FOODIE' &&
                                                <p className="font-italic mb-0">Foodie Favorite: {currentUser.foodieFavorite}</p>}
                                            {currentUser.role === 'CHEF' &&
                                                <p className="font-italic mb-0">Chef Certificate Number: {currentUser.certifiedChefID}</p>}
                                            <p className="font-italic mb-0">Username: {currentUser.username}</p>
                                            <p className="font-italic mb-0">Email Address: {currentUser.email}</p>
                                        </div>
                                    </div>
                                    {currentUser && currentUser.role === "CHEF" &&
                                        <div className="px-4 py-3">
                                            <h5 className="mb-0">All Posts</h5>
                                            <div className="p-3 ms-0 rounded shadow-sm bg-light row">
                                                {postsByUser && postsByUser.map((post, index) =>
                                                    <PostCard key={index} post={post}/>
                                                )}
                                            </div>
                                        </div>
                                    }

                                    <div className="py-4 px-4 ms-2">
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
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-8 col-xl-6">
                            <div className="card rounded-3">
                                <img
                                    src="https://media.glamour.com/photos/6232428d3cd68a607606b849/master/w_1600%2Cc_limit/factor%2520healthy%2520meal%2520delivery.png"
                                    className="w-100"
                                    alt="Sample photo"/>
                                <div className="card-body p-4 p-md-5">
                                    <h1 className="h3 mb-3 mt-5 fw-normal text-center">Please sign in to access your personal profile.</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Profile;