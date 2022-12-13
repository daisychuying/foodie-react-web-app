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
            <div className="bg-white shadow rounded overflow-hidden">
                <div className="card">
                    <h2 className="card-header px-4 pt-3 pb-3 cover bg-warning text-center">Users List({users.length})</h2>
                    <ul className="card-body list-group">
                        {
                            users.map((user) =>
                                <Link to={`/profile/${user._id}`} className="list-group-item p-3 ms-3 rounded shadow-sm bg-light">
                                    <h5>{user.firstName} {user.lastName}</h5>
                                    <h6>{user.role}</h6>
                                </Link>
                            )
                        }
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default UserList;