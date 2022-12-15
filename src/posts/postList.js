import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {findAllPostsThunk, findPostBySearchTermThunk} from "./posts-thunks";
import PostCard from "./post-card";
import HomeNav from "../home-nav";


const PostList = () =>{
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');
    const {posts} = useSelector(state => state.posts);

    const handleSearchBtn = () => {
        if (searchTerm === '') {
            dispatch(findAllPostsThunk());
        } else {
            dispatch(findPostBySearchTermThunk(searchTerm));
        }
    }

    useEffect( () => {
        dispatch(findAllPostsThunk())
    }, [searchTerm])

    return (
        <div className="container">
            <HomeNav />
            <div className="row jumbotron p-3 p-md-5 text-black rounded bg-warning mb-3">
                <div className="col-3"></div>
                <div className="px-0 col-6">
                    <h1 className="display-4 font-italic mb-5 text-center">Search Chef's Recipes</h1>
                    <div className="input-group">
                        <button onClick={handleSearchBtn} className="btn btn-secondary float-end">Search</button>
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
                {posts.length === 0 && <h4 className="text-center alert alert-info">Sorry no post found!</h4>}
                {posts && posts.map( post => <PostCard key={post._id} post={post}/> )}
            </div>
        </div>
    )
}

export default PostList;