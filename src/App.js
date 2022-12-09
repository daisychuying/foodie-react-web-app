import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";

// Import Components
import UserList from "./users";
import Recipes from "./recipes";
import Navigation from "./navigation";
import Login from "./users/login";
import Register from "./users/register";
import ProtectedRoute from "./users/protected-route";
import Profile from "./users/profile";
import PublicProfile from "./users/public-profile";
import usersReducer from "./users/users-reducer";
import recipesReducer from "./recipes/recipes-reducer";
import RecipesDetail from "./recipes/recipes-detail";

const store = configureStore({
    reducer: {
        users: usersReducer,
        recipes: recipesReducer,
    }
})

function App() {
  return (
      <div className="container mt-4 mb-4">
          <Provider store={store}>
              <BrowserRouter>
                  <Navigation />
                  <Routes>
                      <Route path="/" element={<Recipes />} />
                      <Route path="/details/:recipeId" element={<RecipesDetail />} />
                      {/* Users */}
                      <Route path="/login" element={<Login />} />
                      <Route path="/register" element={<Register />} />
                      <Route path="/users" element={<UserList />} />
                      <Route path="/profile" element={
                        <ProtectedRoute>
                            <Profile />
                        </ProtectedRoute>
                      } />
                      <Route path="/profile/:uid" element={<PublicProfile />} />
                      {/* Recipes */}
                  </Routes>
              </BrowserRouter>
          </Provider>
      </div>
      );
    }

export default App;
