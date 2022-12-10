import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import {useSelector} from "react-redux";

const Navigation = () => {
    const {pathname} = useLocation()
    const parts = pathname.split('/')

    const screens = [
        'search',
        'users',
        'register',
        'login',
        'profile',
    ]
    return(
        <ul className="nav nav-pills">
            <li className="nav-item">
                <Link to='/'
                      className={`nav-link ${parts[1] === 'home'?'active': ''}`}>
                    <span className="text-capitalize">Home</span>
                </Link>
            </li>
            {
                screens.map( (screen)=>
                    <li className="nav-item">
                        <Link to={`/${screen}`}
                              className={`nav-link ${parts[1] === screen?'active': ''}`}>
                            <span className="text-capitalize">{screen}</span>
                        </Link>
                    </li>
                )
            }
        </ul>
    )
}

export default Navigation