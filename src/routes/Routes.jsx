import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import RecipeDetails from "../pages/RecipeDetails/RecipeDetails";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader:()=> fetch('https://testy-recipes-server-salimakhond.vercel.app/recipes'),
                
            },
            {
                path: 'recipe/:id',
                element: <PrivateRoute><RecipeDetails></RecipeDetails></PrivateRoute>,
                loader: ({params}) => fetch(`https://testy-recipes-server-salimakhond.vercel.app/recipes/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    
    
]);


export default router;