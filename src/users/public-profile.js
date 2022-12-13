import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {findUserByIdThunk} from "./users-thunk";
import {
    findFollowersThunk,
    findFollowingThunk,
    findUserHasFollowedThunk,
    followUserThunk,
    unfollowUserThunk
} from "../followers/follows-thunks";
import {findBookmarksByUserThunk} from "../bookmarks/bookmarks-thunks";
import BookmarkCard from "../bookmarks/bookmark-card";
import {findPostsByUserThunk} from "../posts/posts-thunks";
import PostCard from "../posts/post-card";

const PublicProfile = () => {
    const {uid} = useParams();
    const {publicProfile, currentUser} = useSelector((state) => state.users)
    const {followers, following, hasFollowed} = useSelector((state) => state.follows)
    const {bookmarks} = useSelector(state => state.bookmarks);
    const {posts} = useSelector(state => state.posts);

    const dispatch = useDispatch()

    const handleFollowBtn = () => {
        if (currentUser && uid != currentUser._id){
            dispatch(followUserThunk({
                followed: uid,
            }))
        }
    }
    const handleUnfollowBtn = () => {
        dispatch(unfollowUserThunk({
            followed: uid,
            follower: currentUser._id
        }))
    }
    useEffect( () => {
        if (currentUser){
            dispatch(findUserHasFollowedThunk({followed: uid, follower: currentUser._id}))
        }
        dispatch(findUserByIdThunk(uid))
        dispatch(findFollowersThunk(uid))
        dispatch(findFollowingThunk(uid))
        dispatch(findPostsByUserThunk(uid))
        dispatch(findBookmarksByUserThunk(uid))
    }, [])

    return (
        <div>
            {publicProfile &&
                <div className="row py-5 px-4">
                    <div className="col-md-10 mx-auto">
                        <div className="bg-white shadow rounded overflow-hidden">
                            <div className="px-4 pt-3 pb-5 cover bg-warning">
                                <div className="mb-5 text-black ">
                                    <h4 className="mt-0 mb-0">{publicProfile.firstName} {publicProfile.lastName}</h4>
                                    <p className="small mb-4">{publicProfile.role}</p>
                                </div>

                                { currentUser && hasFollowed &&
                                    <div className="float-end">
                                        <button className="btn btn-info" onClick={handleUnfollowBtn} > UnFollow </button>
                                    </div>}
                                { currentUser && !hasFollowed && (uid != currentUser._id) &&
                                    <div className="float-end">
                                        <button className="btn btn-info" onClick={handleFollowBtn}> Follow </button>
                                    </div>
                                }
                            </div>
                            <div className="bg-light p-4 d-flex justify-content-end text-center">
                                <ul className="list-inline mb-0">
                                    <li className="list-inline-item"><h5 className="font-weight-bold mb-0 d-block">{bookmarks.length}</h5>
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

                            <div className="px-4 py-3"><h5 className="mb-0">Introduction</h5>
                                <div className="p-4 rounded shadow-sm bg-light">
                                    <p className="font-italic mb-0">{publicProfile.introduction}</p>
                                </div>
                            </div>
                            {publicProfile.role === 'FOODIE' &&
                                <div className="px-4 py-3"><h5 className="mb-0">About</h5>
                                    <div className="p-4 rounded shadow-sm bg-light">
                                        <p className="font-italic mb-0">Foodie Favorite:</p>
                                        <p className="font-italic mb-0">{publicProfile.foodieFavorite}</p>
                                    </div>
                                </div>
                            }

                            {publicProfile.role === 'CHEF' &&
                                <div className="px-4 py-3"><h5 className="mb-0">Recent Posts</h5>
                                    <div className="p-3 ms-0 rounded shadow-sm bg-light row">
                                        {posts && posts.slice(0, 6).map((post, index) =>
                                            <PostCard key={index} post={post}/>
                                        )}
                                    </div>
                                </div>
                            }
                            <div className="py-4 px-4">
                                <h5 className="mb-2">Recent collections</h5>
                                <div className="p-3 ms-0 rounded shadow-sm bg-light row">
                                    {bookmarks && bookmarks.slice(0, 6).map((bookmark, index) =>
                                        <BookmarkCard key={index} bookmark={bookmark}/>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default PublicProfile;