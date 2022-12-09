import {useParams} from "react-router";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findRecipeByIdThunk} from "./recipes-thunks";
import {createBookmarkThunk} from "../bookmarks/bookmarks-thunks";

const RecipesDetail = () => {
    const {recipeID} = useParams();
    const {details} = useSelector(state => state.recipes);
    const {currentUser} = useSelector(state => state.users);
    const dispatch = useDispatch();

    const handleBookmarkBtn = () => {
        dispatch(createBookmarkThunk({
            currentUser,
            recipeID
        }))
    }

    useEffect(() => {
        dispatch(findRecipeByIdThunk(recipeID));
    }, [])


    return (
        <div className="container">
            <div className="row">
                <div className="col-5">
                    <img className="img-fluid" src={details.image}  alt={details.title} />
                    {currentUser &&
                    <button className="btn btn-primary mt-5" onClick={handleBookmarkBtn}>
                        <i className="bi bi-bookmark-plus"></i> Bookmark
                    </button>}
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
            <h4>Instructions</h4>
            <ul>
                {details.analyzedInstructions && details.analyzedInstructions[0].steps.map((step, index) =>
                    <li key={index}>
                        {step.number} : {step.step}
                    </li>
                )}
            </ul>


            <pre>{JSON.stringify(details, null, 2)}</pre>
        </div>
    )
}

export default RecipesDetail;