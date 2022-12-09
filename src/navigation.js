import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import {useSelector} from "react-redux";

const Navigation = () => {
    const {pathname} = useLocation()
    const parts = pathname.split('/')

    const screens = [
        '',
        'search',
        'users',
        'register',
        'login'
    ]
    return(
        <ul className="nav nav-pills">
            {
                screens.map( (screen)=>
                    <li className="nav-item">
                        <Link to={`/${screen}`}
                              className={`nav-link ${parts[1] === screen?'active': ''}`}>
                            {screen}
                        </Link>
                    </li>
                )
            }
        </ul>
    )
}

export default Navigation