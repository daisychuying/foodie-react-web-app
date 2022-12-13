import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {findRecipeBySearchTermThunk, getRandomRecipesThunk} from "./recipes-thunks";
import RecipeCard from "./recipe-card";
import HomeNav from "../home-nav";

const RecipeList = () => {
    const dispatch = useDispatch();
    let [searchTerm, setSearchTerm] = useState("");
    const {recipes} = useSelector(state => state.recipes);

    useEffect(() => {
        dispatch(getRandomRecipesThunk())
    }, [])

    return (
        <>
            <HomeNav/>
            <div className="row jumbotron p-3 p-md-5 text-black rounded bg-warning mb-3">
                <div className="col-3"></div>
                <div className="px-0 col-6">
                    <h1 className="display-4 font-italic mb-5 text-center">Search Online Recipes</h1>
                    <div className="input-group">
                        <button onClick={() => dispatch(findRecipeBySearchTermThunk(searchTerm))} className="btn btn-secondary float-end">Search</button>
                        <input
                            className="form-control w-75"
                            onChange={(e) => {
                                setSearchTerm(e.target.value)
                            }}
                            value={searchTerm}/>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                {recipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe}/>)}
            </div>




            {/*<pre>{JSON.stringify(recipes, null, 2)}</pre>*/}
        </>
    )
}

export default RecipeList;