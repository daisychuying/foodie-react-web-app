import HomeNav from "../home-nav";
import {Link} from "react-router-dom";

const HomePage = () => {
    const categories = ["chinese", "japanese", "american", "italian", "mexican", "spanish", "thai", "korean", "british", "mediterranean", "indian", "viet"];
    return(
        <>
            <div className="container">
                <HomeNav/>
                <div className="nav-scroller py-1 mb-2">
                    <nav className="nav d-flex justify-content-between">
                        {categories && categories.map(c =>
                        <Link className="h5 p-2 text-black text-decoration-none text-capitalize" to={`/search/${c}`} role="button">{c}</Link>
                        )}
                    </nav>
                </div>

                <div className="row jumbotron p-3 p-md-5 text-black rounded bg-warning mb-3">
                    <div className="col-md-5 px-0">
                        <h1 className="display-4 font-italic mb-5">Join Foodie Book Today For More Recipes!</h1>
                        <p className="lead my-3">Multiple lines of text that form the lede, informing new readers
                            quickly and efficiently about what's most interesting in this post's contents.</p>
                        <p className="lead mb-0"><a href="#" className="text-black font-weight-bold">Click here to sign up</a></p>
                    </div>
                    <div className="col-7">
                        <img src="https://www.flavcity.com/wp-content/uploads/2018/05/healthy-meal-prep-recipes.jpg" width="100%" alt=''/>
                    </div>
                </div>
                <h2>Featured Recipes</h2>

                <div className="row mb-2 mt-2">
                    <div className="col-md-6">
                        <div className="card flex-md-row mb-4 box-shadow h-md-250">
                            <div className="card-body d-flex flex-column align-items-start">
                                <strong className="d-inline-block mb-2 text-success">Top Liked Recipe</strong>
                                <h3 className="mb-0">
                                    <a className="text-dark" href="#">Featured post</a>
                                </h3>
                                <div className="mb-1 text-muted">Nov 12</div>
                                <p className="card-text mb-auto">This is a wider card with supporting text below as a
                                    natural lead-in to additional content.</p>
                                <a href="#">Continue reading</a>
                            </div>
                            <img className="card-img-right d-none d-md-block"
                                 data-src="holder.js/200x250?theme=thumb" alt="123"
                                 width="30%"
                                 height="50%"
                                 src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80"
                                 data-holder-rendered="true"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card flex-md-row mb-4 box-shadow h-md-250">
                            <div className="card-body d-flex flex-column align-items-start">
                                <strong className="d-inline-block mb-2 text-success">Top Bookmarked Recipe</strong>
                                <h3 className="mb-0">
                                    <a className="text-dark" href="#">Post title</a>
                                </h3>
                                <div className="mb-1 text-muted">Nov 11</div>
                                <p className="card-text mb-auto">This is a wider card with supporting text below as a
                                    natural lead-in to additional content.</p>
                                <a href="#">Continue reading</a>
                            </div>
                            <img className="card-img-right flex-auto d-none d-md-block"
                                 data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]"
                                 width="30%"
                                 height="100%"
                                 src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574"
                                 data-holder-rendered="true"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HomePage;