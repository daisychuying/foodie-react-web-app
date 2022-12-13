import HomeNav from "../home-nav";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getRandomTwoRecipesThunk} from "./recipes-thunks";

const HomePage = () => {
    const categories = ["chinese", "japanese", "american", "italian", "mexican", "spanish", "thai", "korean", "british", "mediterranean", "indian", "viet"];
    const {recipes} = useSelector(state => state.recipes);
    const dispatch = useDispatch()

    useEffect(() => {
        // dispatch(getRandomRecipesThunk())
        dispatch(getRandomTwoRecipesThunk())
    }, [])

    console.log(recipes)
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
                        <p className="lead my-3">Yes! You can find everything you need to be a professional cook in this page. </p>
                        <p className="lead mb-0"><Link to="/register" className="text-black font-weight-bold">Click here to sign up</Link></p>
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
                                    <a className="text-dark" href="#">West Salad</a>
                                </h3>
                                <div className="mb-1 text-muted">Chef Ramsey</div>
                                <p className="card-text mb-auto">This delicious salad will be a perfect everyday meal!</p>
                                <a href="#">Continue reading</a>
                            </div>
                            <img className="card-img-right d-none d-md-block"
                                 data-src="holder.js/200x250?theme=thumb" alt="123"
                                 // width="30%"
                                 // height="50%"
                                 width="200" height="220"
                                 src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80"
                                 data-holder-rendered="true"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card flex-md-row mb-4 box-shadow h-md-250">
                            <div className="card-body d-flex flex-column align-items-start">
                                <strong className="d-inline-block mb-2 text-success">Top Bookmarked Recipe</strong>
                                <h3 className="mb-0">
                                    <a className="text-dark" href="#">Margarita Castellane</a>
                                </h3>
                                <div className="mb-1 text-muted">Chef Simoooon</div>
                                <p className="card-text mb-auto">Tired of Margarita pizza? Try this easy to make Margarita Castellane which will be ready in 30 mins. </p>
                                <a href="#">Continue reading</a>
                            </div>
                            <img className="card-img-right flex-auto d-none d-md-block"
                                 data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]"
                                 // width="30%"
                                 // height="100%"
                                 width="200" height="220"
                                 src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574"
                                 data-holder-rendered="true"/>
                        </div>
                    </div>
                </div>
                <h2>Random Recipes</h2>
                <div className="row mb-2 mt-2">
                    {recipes.map((recipe) => <div className="col-md-6">
                        <div className="card flex-md-row mb-4 box-shadow h-md-250">
                            <div className="card-body d-flex flex-column align-items-start">
                                <strong className="d-inline-block mb-2 text-success">Random Recipe</strong>
                                <h3 className="mb-0">
                                    <a className="text-dark" href="#">{recipe.title}</a>
                                </h3>
                                <p className="card-text mb-auto">Explore a new recipe for the day</p>
                                <Link to={`/details/${recipe.id}`}>Continue reading</Link>
                            </div>
                            <img className="card-img-right flex-auto d-none d-md-block"
                                 data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]"
                                 // width="30%"
                                 // height="100%"
                                 width="200" height="220"
                                 src={recipe.image}
                                 data-holder-rendered="true"/>
                        </div>
                    </div>)}

                </div>
            </div>
        </>
    )
}
export default HomePage;