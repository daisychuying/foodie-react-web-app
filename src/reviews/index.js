import {createReviewThunk, deleteReviewThunk, findReviewsByRecipeThunk} from "./reviews-thunk";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {useParams} from "react-router";

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
        <div className="ms-1">
            <h4 className="mt-3">Reviews</h4>
            {currentUser &&
                <>
                    <div className="mt-3 mb-5">
                        <textarea className="form-control" onChange={(e) => setReview(e.target.value)} value={review}/>
                        <button className="btn btn-warning float-end mt-2" onClick={handlePostReviewBtn}>Post Review</button>
                    </div>
                    <br />
                </>
            }
            <ul className="list-group">
                {reviews && reviews.map((review, index) =>
                    <li key={index} className="list-group-item">
                        {review.review}
                        {currentUser && (review.author._id === currentUser._id || currentUser.role === "ADMIN") &&
                            <button onClick={() => dispatch(deleteReviewThunk(review._id))} className="btn btn-sm btn-outline-danger float-end ms-2"><i className="bi bi-x-square"></i></button>}
                        <Link to={`/profile/${review.author._id}`} className="float-end text-decoration-none text-black fw-bold pt-1">{review.author.username}</Link>
                    </li>

                )}
            </ul>
        </div>
    )
}

export default ReviewsList;