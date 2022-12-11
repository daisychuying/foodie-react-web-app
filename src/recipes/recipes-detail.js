import {useParams} from "react-router";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findRecipeByIdThunk} from "./recipes-thunks";
import {createBookmarkThunk, deleteBookmarkThunk, findUserHasBookmarkedThunk} from "../bookmarks/bookmarks-thunks";
import {findReviewsByRecipeThunk} from "../reviews/reviews-thunk";
import ReviewsList from "../reviews";

const RecipesDetail = () => {
    const {recipeID} = useParams();
    const {details} = useSelector(state => state.recipes);
    const {hasBookmarked} = useSelector(state => state.bookmarks)
    const {currentUser} = useSelector(state => state.users);
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

            <ReviewsList />

            {/*<pre>{JSON.stringify(details, null, 2)}</pre>*/}
        </div>
    )
}

export default RecipesDetail;