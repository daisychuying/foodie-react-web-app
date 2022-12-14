import {createReviewThunk, deleteReviewThunk, findReviewsByRecipeThunk} from "./reviews-thunk";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {useParams} from "react-router";
import {deleteQuestionThunk} from "../questions/questions-thunk";

const ReviewsList = () => {
    const {recipeID} = useParams();
    const {currentUser} = useSelector(state => state.users);
    const {reviews} = useSelector(state => state.reviews);
    const [review, setReview] = useState('');
    const dispatch = useDispatch();

    const handlePostReviewBtn = async () => {
        dispatch(createReviewThunk({
            author: currentUser._id,
            review,
            recipeID,
        }))
        setReview('');
    }

    useEffect(() => {
        dispatch(findReviewsByRecipeThunk(recipeID));
    }, [])

    return (
        <div className="mt-5">
            <h4>Reviews</h4>
            {currentUser &&
                <>
                    <div className="mt-3 mb-5">
                        <textarea className="form-control" onChange={(e) => setReview(e.target.value)} value={review}/>
                        <button className="btn btn-primary float-end mt-2" onClick={handlePostReviewBtn}>Post Review</button>
                    </div>
                    <br />
                </>
            }
            <ul className="list-group">
                {reviews && reviews.map((review, index) =>
                    <li key={index} className="list-group-item">
                        {review.review}
                        {currentUser && (review.author._id === currentUser._id || currentUser.role === "ADMIN") &&
                            <button onClick={() => dispatch(deleteReviewThunk(review._id))} className="btn btn-sm btn-outline-danger float-end ms-2"><i className="bi bi-x-square"></i></button>
                        }
                        <Link to={`/profile/${review.author._id}`} className="float-end">{review.author.username}</Link>
                    </li>

                )}
            </ul>
        </div>
    )
}

export default ReviewsList;