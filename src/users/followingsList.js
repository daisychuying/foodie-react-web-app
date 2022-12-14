import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import HomeNav from "../home-nav";
import {Link} from "react-router-dom";
import {findFollowingThunk} from "../followers/follows-thunks";
import {useParams} from "react-router";

const FollowingsList = () => {
    const {following} = useSelector( (state) => state.follows)
    const {uid} = useParams();
    const dispatch = useDispatch()
    useEffect( () => {
        dispatch(findFollowingThunk(uid))
    },[])
    return (
        <div className="container">
            <HomeNav />
            <div className="bg-white shadow rounded overflow-hidden">
                <div className="card">
                    <h2 className="card-header px-4 pt-3 pb-3 cover bg-warning text-center">Following List({following.length})</h2>
                    <ul className="card-body list-group">
                        {
                            following.map((a) =>
                                <Link to={`/profile/${a.followed._id}`} className="list-group-item p-3 ms-3 rounded shadow-sm bg-light">
                                    <h5>{a.followed.firstName} {a.followed.lastName}</h5>
                                    <h6>{a.followed.role}</h6>
                                </Link>
                            )
                        }
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default FollowingsList;