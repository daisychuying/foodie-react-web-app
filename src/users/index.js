import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findAllUsersThunk} from "./users-thunk";
import HomeNav from "../home-nav";

const UserList = () => {
    const {users} = useSelector( (state) => state.users)
    const dispatch = useDispatch()
    useEffect( () => {
        dispatch(findAllUsersThunk())
    },[])
        return (
        <div className="container">
            <HomeNav />
            <h1>All Users {users.length}</h1>
            <ul className="list-group">
                {
                    users.map((user) =>
                        <li key={user._id} className="list-group-item">
                            {user.username}
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default UserList;