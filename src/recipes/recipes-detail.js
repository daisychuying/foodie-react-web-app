import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findRecipeByIdThunk} from "./recipes-thunks";
import {createBookmarkThunk, deleteBookmarkThunk, findUserHasBookmarkedThunk} from "../bookmarks/bookmarks-thunks";
import {createReviewThunk, findReviewsByRecipeThunk} from "../reviews/reviews-thunk";
import {Link} from "react-router-dom";

const RecipesDetail = () => {
    const {recipeID} = useParams();
    const {details} = useSelector(state => state.recipes);
    const {hasBookmarked} = useSelector(state => state.bookmarks)
    const {currentUser} = useSelector(state => state.users);
    const {reviews} = useSelector(state => state.reviews)
    const [review, setReview] = useState('');
    const dispatch = useDispatch();

    const handleBookmarkBtn = () => {
        dispatch(createBookmarkThunk({
            recipeID,
            image: details.image,
            title: details.title,
        }))
    }

    const handleRemoveBtn = () => {
        dispatch(deleteBookmarkThunk({
            user: currentUser._id,
            recipeID: recipeID,
        }))
    }

    const handlePostReviewBtn = () => {
        dispatch(createReviewThunk({
            review,
            recipeID,
        }))
    }

    useEffect(() => {
        dispatch(findRecipeByIdThunk(recipeID));
        dispatch(findReviewsByRecipeThunk(recipeID));
        if (currentUser) {
            dispatch(findUserHasBookmarkedThunk({
                user: currentUser._id,
                recipeID: recipeID,
            }));
        }
    }, [])

    return (
        <div className="container my-4">
            <div className="row">
                <div className="col-5">
                    <img className="img-fluid" src={details.image}  alt={details.title} />
                    {currentUser && !hasBookmarked &&
                        <button className="btn btn-primary mt-5" onClick={handleBookmarkBtn}>
                            <i className="bi bi-bookmark-plus"></i> Bookmark
                        </button>}
                    {currentUser && hasBookmarked &&
                        <button className="btn btn-primary mt-5" onClick={handleRemoveBtn}>
                            <i className="bi bi-bookmark-dash"></i> Remove
                        </button>
                    }
                </div>
                <div className="col-7">
                    <h3>{details.title}</h3>

                    {details.readyInMinutes &&
                    <h4>Ready In Minutes: {details.readyInMinutes}</h4>}

                    {details.servings &&
                    <h4>Serving Size: {details.servings}</h4>}

                    {details.pairingText &&
                    <h4>Recommended Pairing: {details.pairingText}</h4> }

                    {details.summary && <h4>Summary: </h4>}
                    <p dangerouslySetInnerHTML={{__html: details.summary}}></p>
                </div>
            </div>

            <div className="my-5 ms-5">
                <h4>Instructions</h4>
                <ul>
                    {details.analyzedInstructions
                        && details.analyzedInstructions[0]
                        && details.analyzedInstructions[0].steps
                        && details.analyzedInstructions[0].steps.map((step, index) =>
                            <li key={index}>
                                {step.number} : {step.step}
                            </li>
                        )}
                </ul>
            </div>

            <div className="ms-5">
                <h4>Reviews</h4>
                {currentUser &&
                    <>
                        <div className="mt-3 mb-5">
                            <textarea className="form-control" onChange={(e) => setReview(e.target.value)}/>
                            <button className="btn btn-primary float-end mt-2" onClick={handlePostReviewBtn}>Post Review</button>
                        </div>
                        <br />
                    </>
                }
                <ul className="list-group">
                    {reviews && reviews.map((review, index) =>
                        <li key={index} className="list-group-item">
                            {review.review}
                            <Link to={`/profile/${review.author._id}`} className="float-end">{review.author.username}</Link>
                        </li>

                    )}
                </ul>
            </div>



            {/*<pre>{JSON.stringify(details, null, 2)}</pre>*/}
        </div>
    )
}

export default RecipesDetail;