import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import HomeNav from "../home-nav";
import {Link} from "react-router-dom";
import {findFollowersThunk} from "../followers/follows-thunks";
import {useParams} from "react-router";

const FollowersList = () => {
    const {followers} = useSelector( (state) => state.follows)
    const {uid} = useParams();
    const dispatch = useDispatch()
    useEffect( () => {
        dispatch(findFollowersThunk(uid))
    },[])
    return (
        <div className="container">
            <HomeNav />
            <div className="bg-white shadow rounded overflow-hidden">
                <div className="card">
                    <h2 className="card-header px-4 pt-3 pb-3 cover bg-warning text-center">Followers List({followers.length})</h2>
                    <ul className="card-body list-group">
                        {
                            followers.map((a) =>
                                <Link to={`/profile/${a.follower._id}`} className="list-group-item p-3 ms-3 rounded shadow-sm bg-light">
                                    <h5>{a.follower.firstName} {a.follower.lastName}</h5>
                                    <h6>{a.follower.role}</h6>
                                </Link>
                            )
                        }
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default FollowersList;