import {useParams} from "react-router";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findRecipeByIdThunk} from "./recipes-thunks";
import {createBookmarkThunk, deleteBookmarkThunk, findUserHasBookmarkedThunk} from "../bookmarks/bookmarks-thunks";
import ReviewsList from "../reviews";
import HomeNav from "../home-nav";

const RecipesDetail = () => {
    const {recipeID} = useParams();
    const {details} = useSelector(state => state.recipes);
    const {hasBookmarked} = useSelector(state => state.bookmarks)
    const {currentUser} = useSelector(state => state.users);
    const dispatch = useDispatch();

    const handleBookmarkBtn = () => {
        dispatch(createBookmarkThunk({
            user: currentUser._id,
            recipeID,
            image: details.image,
            title: details.title,
            type: "ONLINE"
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
        if (currentUser) {
            dispatch(findUserHasBookmarkedThunk({
                user: currentUser._id,
                recipeID: recipeID,
            }));
        }
    }, [])

    return (
        <div className="container my-4">
            <HomeNav />
            <div className="card bg-light border-warning">
                <h3 className="card-header bg-warning text-center">Recipe Detail</h3>
                <div className="row p-5">
                    <div className="col-5">
                        <img className="img-fluid" src={details.image}  alt={details.title} />
                    </div>
                    <div className="col-7">
                        <h3 className="pb-2">{details.title}</h3>

                        {details.readyInMinutes &&
                            <h4>Ready In Minutes: {details.readyInMinutes}</h4>}

                        {details.servings &&
                            <h4>Serving Size: {details.servings}</h4>}

                        {details.pairingText &&
                            <h4>Recommended Pairing: {details.pairingText}</h4> }
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
                        {details.summary && <h4>Summary: </h4>}
                        <p dangerouslySetInnerHTML={{__html: details.summary}}></p>
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
                </div>
            </div>


            {/*<ReviewsList />*/}

            {/*<pre>{JSON.stringify(details, null, 2)}</pre>*/}
        </div>
    )
}

export default RecipesDetail;