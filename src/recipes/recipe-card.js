import {Link} from "react-router-dom";

const RecipeCard = ({recipe}) => {
    return (
        <div className="col-md-6">
            <div
                className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-primary">Online Recipe</strong>
                    <h3 className="mb-0">{recipe.title}</h3>
                    <div className="mb-1 text-muted mb-auto">Recipe ID: {recipe.id}</div>
                    <Link to={`/details/${recipe.id}`} >View Recipe</Link>
                </div>
                <div className="col-auto d-none d-lg-block">
                    <img className="" width="200" height="250" src={recipe.image} />
                </div>
            </div>
        </div>
    )
}

export default RecipeCard;