import {Link} from "react-router-dom";

const PostCard = ({post}) => {
    return (
        <div className="col-md-6">
            <div
                className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-success">Chef Post</strong>
                    <h3 className="mb-0">{post.title}</h3>
                    <div className="mb-1 text-muted mb-auto">Recipe ID: {post._id}</div>
                    <Link to={`/post-detail/${post._id}`} className="text-success">View Post</Link>
                </div>
                <div className="col-auto d-none d-lg-block">
                    <img width="200" height="250" src={post.image}  alt='234'/>
                </div>
            </div>
        </div>
    )
}

export default PostCard;