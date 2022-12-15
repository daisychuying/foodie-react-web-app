import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";

// Import Components
import UserList from "./users/userList";
import Recipes from "./recipes";
import Login from "./users/login";
import Register from "./users/register";
import Profile from "./users/profile";
import HomePage from "./recipes/home-page";
import PublicProfile from "./users/public-profile";
import usersReducer from "./users/users-reducer";
import recipesReducer from "./recipes/recipes-reducer";
import RecipesDetail from "./recipes/recipes-detail";
import bookmarksReducer from "./bookmarks/bookmarks-reducer";
import EditProfile from "./users/edit-profile";
import reviewsReducer from "./reviews/reviews-reducer";
import followsReducer from "./followers/follows-reducer";
import UploadPost from "./posts/upload-post";
import postsReducer from "./posts/posts-reducer";
import PostList from "./posts/postList";
import PostDetail from "./posts/post-detail";
import RecipeByCategory from "./recipes/recipe-category";
import FollowersList from "./users/followersList";
import FollowingsList from "./users/followingsList";
import questionsReducer from "./questions/questions-reducer";

const store = configureStore({
    reducer: {
        users: usersReducer,
        recipes: recipesReducer,
        bookmarks: bookmarksReducer,
        reviews: reviewsReducer,
        follows: followsReducer,
        posts: postsReducer,
        questions: questionsReducer,
    }
})

function App() {
  return (
      <div className="container mt-4 mb-4">
          <Provider store={store}>
              <BrowserRouter>
                  <Routes>
                      <Route path="/" element={<HomePage />} />
                      <Route path="/search" element={<Recipes />} />
                      <Route path="/details/:recipeID" element={<RecipesDetail />} />
                      {/* Users */}
                      <Route path="/login" element={<Login />} />
                      <Route path="/register" element={<Register />} />
                      <Route path="/users" element={<UserList />} />
                      <Route path="/profile" element={<Profile />} />
                      <Route path="/profile/:uid" element={<PublicProfile />} />
                      <Route path="/edit-profile" element={<EditProfile />}/>
                      <Route path="/follower/:uid" element={<FollowersList/>}/>
                      <Route path="/following/:uid" element={<FollowingsList/>}/>
                      {/* Posts */}
                      <Route path="/upload-post" element={<UploadPost />}/>
                      <Route path="/all-posts" element={<PostList />}/>
                      <Route path="/post-detail/:postID" element={<PostDetail />} />
                      {/* Recipe by Category*/}
                      <Route path="/search/:category" element={<RecipeByCategory />}/>
                  </Routes>
              </BrowserRouter>
          </Provider>
      </div>
      );
    }

export default App;
