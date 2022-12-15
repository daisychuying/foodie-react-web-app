import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import CurrentUser from "./users/current-user";

const HomeNav = () => {
    const {currentUser} = useSelector(state => state.users)
  return(
      <>
          <header className="blog-header py-3 pb-0">
              <div className="row flex-nowrap justify-content-between align-items-center">
                  <div className="col-4 pt-1">
                  </div>
                  <div className="col-4 text-center">
                      <Link to="/" className="text-decoration-none text-black" title="home"><h1>Foodie Book</h1></Link>
                  </div>
                  <div className="col-4 d-flex justify-content-end align-items-center">
                      <Link className="btn btn-lg" to="/login" title="profile" ><i className="bi bi-person-circle fa-5x me-3"></i>  </Link>
                      {currentUser && currentUser.role === 'ADMIN' && <Link to="/users" className="btn btn-lg btn-outline-secondary" role="button">Users List</Link>}
                      {currentUser && currentUser.role === 'CHEF' && <Link to="/upload-post" className="btn btn-lg btn-outline-secondary" role="button">Upload Post</Link>}
                      {!currentUser && <Link to="/register" className="btn btn-lg btn-outline-secondary" role="button">Sign Up</Link>}

                  </div>
              </div>
              <div className="row pb-0">
                  <div className="col-6 text-end border-end border-3 border-warning">
                      <Link className="text-decoration-none" to="/search" role="button"><h3 className="text-black">Online Recipes   </h3></Link>
                  </div>
                  <div className="col-6 text-start">
                      <Link className="text-decoration-none" to="/all-posts" role="button"><h3 className="text-black">   Chef's Recipes</h3></Link>
                  </div>
              </div>
          </header>
      </>
  )
}

export default HomeNav