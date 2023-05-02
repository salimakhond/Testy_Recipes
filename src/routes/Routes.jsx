import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import RecipeDetails from "../pages/RecipeDetails/RecipeDetails";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader:()=> fetch('http://localhost:5000/recipes'),
                
            },
            {
                path: 'recipe/:id',
                element: <RecipeDetails></RecipeDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/recipes/${params.id}`)
            }
        ]
    },
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
    
]);


export default router;