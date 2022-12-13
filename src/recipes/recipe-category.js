import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import RecipeCard from "./recipe-card";
import {useParams} from "react-router";
import {findRecipeBySearchTermThunk} from "./recipes-thunks";
import HomeNav from "../home-nav";

const RecipeByCategory = () => {
    const dispatch = useDispatch();
    const {category} = useParams();
    const {recipes} = useSelector(state => state.recipes);

    useEffect(() => {
        dispatch(findRecipeBySearchTermThunk(category))
    }, [])

    return (
        <>
            <div className="container">
                <HomeNav/>
                <div className="nav-scroller py-1 mb-2">
                    <nav className="nav d-flex justify-content-between">
                        <a className="h5 p-2 text-black text-decoration-none" href="/search/chinese" role="button">Chinese</a>
                        <a className="h5 p-2 text-black text-decoration-none" href="/search/japanese" role="button">Japanese</a>
                        <a className="h5 p-2 text-black text-decoration-none" href="/search/american" role="button">American</a>
                        <a className="h5 p-2 text-black text-decoration-none" href="/search/italian" role="button">Italian</a>
                        <a className="h5 p-2 text-black text-decoration-none" href="/search/mexican" role="button">Mexican</a>
                        <a className="h5 p-2 text-black text-decoration-none" href="/search/spanish" role="button">Spanish</a>
                        <a className="h5 p-2 text-black text-decoration-none" href="/search/thai" role="button">Thai</a>
                        <a className="h5 p-2 text-black text-decoration-none" href="/search/korean" role="button">Korean</a>
                        <a className="h5 p-2 text-black text-decoration-none" href="/search/british" role="button">British</a>
                        <a className="h5 p-2 text-black text-decoration-none" href="/search/mediterranean" role="button">Mediterranean</a>
                        <a className="h5 p-2 text-black text-decoration-none" href="/search/indian" role="button">Indian</a>
                        <a className="h5 p-2 text-black text-decoration-none" href="/search/viet" role="button">Viet</a>
                    </nav>
                </div>
                <div className="row mt-4">
                    {recipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe}/>)}
                </div>
            </div>

            {/*<pre>{JSON.stringify(recipes, null, 2)}</pre>*/}
        </>
    )
}

export default RecipeByCategory;