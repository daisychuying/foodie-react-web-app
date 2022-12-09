import {useEffect, useState} from "react";
import * as service from './users-service';
import {useDispatch, useSelector} from "react-redux";
import {findAllUsersThunk} from "./users-thunk";

const UserList = () => {
    const {users} = useSelector( (state) => state.users)
    const dispatch = useDispatch()
    useEffect( () => {
        dispatch(findAllUsersThunk())
    },[])
        return (
        <>
            <h1>Users {users.length}</h1>
            <ul className="list-group">
                {
                    users.map((user) =>
                        <li key={user._id} className="list-group-item">
                            {user.username}
                        </li>
                    )
                }
            </ul>
        </>
    )
}

export default UserList;