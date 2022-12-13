import {Link} from "react-router-dom";

const BookmarkCard = ({bookmark}) => {
    return (
        <div className="col-md-6">
            <div
                className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                    {bookmark.type === "ONLINE" &&
                        <strong className="d-inline-block mb-2 text-primary">Online Recipe</strong>}
                    {bookmark.type === "POST" &&
                        <strong className="d-inline-block mb-2 text-primary">Chef Recipe</strong>}
                    <h4 className="mb-0">{bookmark.title}</h4>
                    {bookmark.type === "ONLINE" &&
                        <div className="mb-1 text-muted mb-auto">Recipe ID: {bookmark.recipeID}</div>}
                    {bookmark.type === "POST" &&
                        <div className="mb-1 text-muted mb-auto">Post ID: {bookmark.recipeID.substring(18)}</div>}
                    {bookmark.type === "ONLINE" &&
                        <Link to={`/details/${bookmark.recipeID}`} >View Recipe</Link>}
                    {bookmark.type === "POST" &&
                        <Link to={`/post-detail/${bookmark.recipeID}`} >View Post</Link>}
                </div>
                <div className="col-auto d-none d-lg-block">
                    <img width="200" height="250" src={bookmark.image} alt={bookmark.title}/>
                </div>
            </div>
        </div>
    )
}

export default BookmarkCard;