import {Link} from "react-router-dom";
import {useLocation} from "react-router";

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
                <Link to={'/'}
                      className={`nav-link ${parts[1] === '' ? 'active': ''}`}>
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
            <li className="nav-item">
                <Link to='/profile/639399ae76a4f02a36b40cf5'
                      className={`nav-link`}>
                    <span className="text-capitalize">Test</span>
                </Link>
            </li>
        </ul>
    )
}

export default Navigation