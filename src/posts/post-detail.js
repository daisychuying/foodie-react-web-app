import {useNavigate, useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {deletePostThunk, findPostByIDThunk} from "./posts-thunks";
import {Link} from "react-router-dom";
import {createBookmarkThunk, deleteBookmarkThunk, findUserHasBookmarkedThunk} from "../bookmarks/bookmarks-thunks";
import HomeNav from "../home-nav";
import QuestionsList from "../questions";

const PostDetail = () => {
    const {postID} = useParams();
    const {currentUser} = useSelector(state => state.users)
    const {postDetail} = useSelector(state => state.posts);
    const {hasBookmarked} = useSelector(state => state.bookmarks);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect( () => {
        dispatch(findPostByIDThunk(postID));
        if (currentUser) {
            dispatch(findUserHasBookmarkedThunk({
                user: currentUser._id,
                recipeID: postID,
            }));
        }
    }, [])

    const handleDeleteBtn = () => {
        dispatch(deletePostThunk(postID));
        navigate('/all-posts');
    }

    const handleBookmarkBtn = () => {
        dispatch(createBookmarkThunk({
            user: currentUser._id,
            recipeID: postID,
            image: postDetail.image,
            title: postDetail.title,
            type: "POST"
        }))
    }

    const handleRemoveBtn = () => {
        dispatch(deleteBookmarkThunk({
            user: currentUser._id,
            recipeID: postID,
        }))
    }

    return (
        <div className="container my-4">
            <HomeNav/>
            {postDetail &&
                <div className="card bg-light border-warning">
                    <h3 className="card-header bg-warning text-center">Recipe Detail</h3>
                    <div className="row p-5">
                        <div className="col-5">
                            <img className="img-fluid" src={postDetail.image} />
                        </div>
                        <div className="col-7">
                            <h3 className="pb-2">{postDetail.title}</h3>
                            <h4>Author :
                                <Link to={`/profile/${postDetail.author._id}`} role="button" className="btn btn-warning">
                                    {postDetail.author.firstName} {postDetail.author.lastName}</Link>
                            </h4>
                            <h4>Ready In Minutes: {postDetail.readyInMinutes}</h4>
                            <div className="row">
                                {currentUser && !hasBookmarked &&
                                    <div className="col-2">
                                        <button className="btn btn-warning mt-3" onClick={handleBookmarkBtn}>
                                            <i className="bi bi-bookmark-plus"></i> Bookmark
                                        </button>
                                    </div>
                                }
                                {currentUser && hasBookmarked &&
                                    <div className="col-2">
                                        <button className="btn btn-danger mt-3" onClick={handleRemoveBtn}>
                                            <i className="bi bi-bookmark-dash"></i> Remove
                                        </button>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className="p-2 m-2 mt-3">
                            <h4>Instructions</h4>
                            <p>{postDetail.instructions}</p>
                            {currentUser && (currentUser._id === postDetail.author._id || currentUser.role === "ADMIN") &&
                            <button className="btn btn-danger mt-5 me-2" onClick={handleDeleteBtn}>Delete</button>}
                        </div>
                    </div>
                </div>
            }
            <QuestionsList />
        </div>
    )
}

export default PostDetail;