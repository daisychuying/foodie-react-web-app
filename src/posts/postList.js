import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {findAllPostsThunk} from "./posts-thunks";
import PostCard from "./post-card";
import HomeNav from "../home-nav";

const PostList = () =>{
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');
    const {posts} = useSelector(state => state.posts);
    useEffect( () => {
        dispatch(findAllPostsThunk())
    }, [])

    return (
        <div className="container">
            <HomeNav />
            <h1>
                All Posts
            </h1>
            <button className="btn btn-primary float-end">Search</button>
            <input className="form-control w-75" value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}/>
            <div className="row mt-4">
                {posts.map( post => <PostCard key={post._id} post={post}/> )}
            </div>
        </div>
    )
}

export default PostList;