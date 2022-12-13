import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import RecipeCard from "./recipe-card";
import {useParams} from "react-router";
import {findRecipeBySearchTermThunk} from "./recipes-thunks";
import HomeNav from "../home-nav";
import {Link} from "react-router-dom";

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
                        <Link className="h5 p-2 text-black text-decoration-none" to="/search/chinese" role="button">Chinese</Link>
                        <Link className="h5 p-2 text-black text-decoration-none" to="/search/japanese" role="button">Japanese</Link>
                        <Link className="h5 p-2 text-black text-decoration-none" to="/search/american" role="button">American</Link>
                        <Link className="h5 p-2 text-black text-decoration-none" to="/search/italian" role="button">Italian</Link>
                        <Link className="h5 p-2 text-black text-decoration-none" to="/search/mexican" role="button">Mexican</Link>
                        <Link className="h5 p-2 text-black text-decoration-none" to="/search/spanish" role="button">Spanish</Link>
                        <Link className="h5 p-2 text-black text-decoration-none" to="/search/thai" role="button">Thai</Link>
                        <Link className="h5 p-2 text-black text-decoration-none" to="/search/korean" role="button">Korean</Link>
                        <Link className="h5 p-2 text-black text-decoration-none" to="/search/british" role="button">British</Link>
                        <Link className="h5 p-2 text-black text-decoration-none" to="/search/mediterranean" role="button">Mediterranean</Link>
                        <Link className="h5 p-2 text-black text-decoration-none" to="/search/indian" role="button">Indian</Link>
                        <Link className="h5 p-2 text-black text-decoration-none" to="/search/viet" role="button">Viet</Link>
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