import {useNavigate, useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {deletePostThunk, findPostByIDThunk} from "./posts-thunks";
import {Link} from "react-router-dom";

const PostDetail = () => {
    const {postID} = useParams();
    const {currentUser} = useSelector(state => state.users)
    const {postDetail} = useSelector(state => state.posts);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect( () => {
        dispatch(findPostByIDThunk(postID));
    }, [])

    const handleDeleteBtn = () => {
        dispatch(deletePostThunk(postID));
        navigate('/all-posts');
    }

    return (
        <div className="container my-4">
            <h1>Post Detail</h1>
            {postDetail &&
                <div className="row">
                    <div className="col-5">
                        <img className="img-fluid" src={postDetail.image} />
                    </div>
                    <div className="col-7">
                        <h3>{postDetail.title}</h3>
                        <h4>Author:
                            <Link to={`/profile/${postDetail.author._id}`}>
                                {postDetail.author.firstName} {postDetail.author.lastName}</Link>
                        </h4>
                        <h4>Ready In Minutes: {postDetail.readyInMinutes}</h4>
                        <h4>Instructions</h4>
                        <p>{postDetail.instructions}</p>
                        {currentUser && currentUser._id === postDetail.author._id &&
                        <button className="btn btn-danger" onClick={handleDeleteBtn}>Delete</button>}
                    </div>
                </div>
            }

        </div>
    )
}

export default PostDetail;