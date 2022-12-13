import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findAllUsersThunk} from "./users-thunk";
import HomeNav from "../home-nav";
import {Link} from "react-router-dom";

const UserList = () => {
    const {users} = useSelector( (state) => state.users)
    const dispatch = useDispatch()
    useEffect( () => {
        dispatch(findAllUsersThunk())
    },[])
        return (
        <div className="container">
            <HomeNav />
            <div className="card">
                <h1 className="card-header">All Users ({users.length})</h1>
                <ul className="card-body list-group">
                    {
                        users.map((user) =>
                            <Link to={`/profile/${user._id}`} className="list-group-item">
                                <h5>{user.firstName} {user.lastName}</h5>
                                <h6>{user.role}</h6>
                            </Link>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

export default UserList;