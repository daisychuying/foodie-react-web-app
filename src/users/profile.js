import {useSelector} from "react-redux";
import {current} from "react-redux"

const Profile = () => {
    const {currentUser} = useSelector((state) => state.users)
    return (
        <>
            <h1>Profile</h1>
            <h2>Welcome {currentUser}</h2>
        </>
    )
}

export default Profile;