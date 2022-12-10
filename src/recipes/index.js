import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {findRecipeBySearchTermThunk, getRandomRecipesThunk} from "./recipes-thunks";
import RecipeCard from "./recipe-card";

const RecipeList = () => {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState("");
    const {recipes} = useSelector(state => state.recipes);

    useEffect(() => {
        // dispatch(getRandomRecipesThunk())
    }, [])

    return (
        <>
            <h1>Recipes</h1>
            <button onClick={() => dispatch(findRecipeBySearchTermThunk(searchTerm))} className="btn btn-primary float-end">Search</button>
            <input
                className="form-control w-75"
                onChange={(e) => {
                    setSearchTerm(e.target.value)
                }}
                value={searchTerm}/>
            <div className="row mt-4">
                {recipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe}/>)}
            </div>

            {/*<pre>{JSON.stringify(recipes, null, 2)}</pre>*/}
        </>
    )
}

export default RecipeList;