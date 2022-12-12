import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {findPostByIDThunk} from "./posts-thunks";
import {Link} from "react-router-dom";

const PostDetail = () => {
    const {postID} = useParams();
    const {postDetail} = useSelector(state => state.posts);
    const dispatch = useDispatch();
    useEffect( () => {
        dispatch(findPostByIDThunk(postID));
    }, [])

    return (
        <div className="container my-4">
            <h1>Post Detail</h1>
            {postDetail &&
                <div className="row">
                    <div className="col-5">

                    </div>
                    <div className="col-7">
                        <h3>{postDetail.title}</h3>
                        <h4>Author :
                            <Link to={`/profile/${postDetail.author._id}`}>
                                {postDetail.author.firstName} {postDetail.author.lastName}</Link>
                        </h4>
                        <h4>Ready In Minutes: {postDetail.readyInMinutes}</h4>
                        <h4>Instructions</h4>
                        {postDetail.instructions}
                    </div>
                </div>
            }

        </div>
    )
}

export default PostDetail;