import {Link} from "react-router-dom";

const BookmarkCard = ({bookmark}) => {
    return (
        <div className="col-md-6">
            <div
                className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-primary">Online Recipe</strong>
                    <h3 className="mb-0">{bookmark.title}</h3>
                    <div className="mb-1 text-muted mb-auto">Recipe ID: {bookmark.recipeID}</div>
                    <Link to={`/details/${bookmark.recipeID}`} >View Recipe</Link>
                </div>
                <div className="col-auto d-none d-lg-block">
                    <img width="200" height="250" src={bookmark.image} alt={bookmark.title}/>
                </div>
            </div>
        </div>
    )
}

export default BookmarkCard;