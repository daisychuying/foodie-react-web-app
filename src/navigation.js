import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import {useSelector} from "react-redux";

const Navigation = () => {
    const {pathname} = useLocation()
    const parts = pathname.split('/')
    return(
        <ul className="nav nav-pills">
            <li className="nav-item">
                <Link to="/"
                      className={`nav-link ${parts[1] === ''?'active': ''}`}>
                    Recipes
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/users"
                      className={`nav-link ${parts[1] === 'users'?'active': ''}`}>
                    Users
                </Link>
            </li>
        </ul>
    )
}

export default Navigation