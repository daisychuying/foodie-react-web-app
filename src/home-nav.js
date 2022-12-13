import {Link} from "react-router-dom";

const HomeNav = () => {
  return(
      <>
          <header className="blog-header py-3">
              <div className="row flex-nowrap justify-content-between align-items-center">
                  <div className="col-4 pt-1">
                      <Link className="btn btn-lg" to="/search" title="search" ><i className="bi bi-search me-3"> Search Recipe</i> </Link>
                  </div>
                  <div className="col-4 text-center">
                      <Link to="/" className="text-decoration-none text-black" title="home"><h1>Foodie Book</h1></Link>
                  </div>
                  <div className="col-4 d-flex justify-content-end align-items-center">
                      <Link className="btn btn-lg" to="/login" title="profile" ><i className="bi bi-person-circle fa-5x me-3"></i>  </Link>
                      <Link className="btn btn-lg btn-outline-secondary" to="/register" role="button">Sign up</Link>
                  </div>
              </div>
          </header>
      </>
  )
}

export default HomeNav