import {Link} from "react-router-dom";

const RecipeCard = ({recipe}) => {
    return (
        <>
            <Link to={`/details/${recipe.id}`} className="card col-3">
                <img src={recipe.image} className="card-img-top" alt={recipe.title} />
                    <div className="card-body">
                        <h5 className="card-title">{recipe.title}</h5>
                    </div>
            </Link>
        </>
    )
}

export default RecipeCard;