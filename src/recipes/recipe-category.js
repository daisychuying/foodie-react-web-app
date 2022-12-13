import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import RecipeCard from "./recipe-card";
import {useParams} from "react-router";
import {findRecipeBySearchTermThunk} from "./recipes-thunks";

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
                <header className="blog-header py-3">
                    <div className="row flex-nowrap justify-content-between align-items-center">
                        <div className="col-4 pt-1">
                        </div>
                        <div className="col-4 text-center">
                            <h1>Foodie Book</h1>
                        </div>
                        <div className="col-4 d-flex justify-content-end align-items-center">
                            <a className="btn btn-sm btn-outline-secondary" href="/register" role="button">Sign up</a>
                        </div>
                    </div>
                </header>
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