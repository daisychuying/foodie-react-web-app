const HomeNav = () => {
  return(
      <>
          <header className="blog-header py-3">
              <div className="row flex-nowrap justify-content-between align-items-center">
                  <div className="col-4 pt-1">
                      <a className="btn btn-lg" href="/search" title="search" ><i className="bi bi-search me-3"> Search Recipe</i> </a>
                  </div>
                  <div className="col-4 text-center">
                      <a href="/home" className="text-decoration-none text-black" title="home"><h1>Foodie Book</h1></a>
                  </div>
                  <div className="col-4 d-flex justify-content-end align-items-center">
                      <a className="btn btn-lg" href="/login" title="profile" ><i className="bi bi-person-circle fa-5x me-3"></i>  </a>
                      <a className="btn btn-lg btn-outline-secondary" href="/register" role="button">Sign up</a>
                  </div>
              </div>
          </header>
      </>
  )
}

export default HomeNav