import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../component/Error/ErrorPage.js/ErrorPage";
import Layout from "../component/Layout/Layout";
import Main from "../component/Layout/Main/Main";
import AddService from "../component/Pages/AddService/AddService";
import Blog from "../component/Pages/Blog/Blog";
import Gallery from "../component/Pages/Gallery/Gallery";
import MyReviue from "../component/Pages/MyReviue/MyReviue";
import Update from "../component/Pages/MyReviue/Update";
import AllCategary from "../component/Pages/Services/AllCategary";
import ServiceDetails from "../component/Pages/Services/ServiceDetails";
import PrivateRoute from "../component/PrivateRoute/PrivateRoute";
import Login from "../component/UserAccount/Login/Login";
import Register from "../component/UserAccount/Register/Register";



export const router = createBrowserRouter([

    {
        path:'/',
        element:<Layout></Layout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path:'/',
                element:<Main></Main>,
            },
            {
                path:'/home',
                element:<Main></Main>,
            },
            
            {
                path:'/allService',
                element:<PrivateRoute><AllCategary></AllCategary></PrivateRoute>,
            },
            {
                path:'/details/:id',
                element:<ServiceDetails></ServiceDetails>,
                loader:({params}) => fetch(`https://server-side-eight.vercel.app/services/${params.id}`)
            },
            {
                path:'/registion',
                element:<Register></Register>,
            },
            {
                path:'/reviue',
                element:<PrivateRoute><MyReviue></MyReviue></PrivateRoute>
            },
            {
                path:'/gallery',
                element:<Gallery></Gallery>,
            },
            {
                path:'/addService',
                element:<PrivateRoute><AddService></AddService></PrivateRoute>,
            },
            {
                path:'/login',
                element:<Login></Login>,
            },

            {
                path:'/update/:id',
                element:<PrivateRoute><Update></Update></PrivateRoute>,
                loader:({params}) => fetch(`https://server-side-eight.vercel.app/review/${params.id}`)
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },

        ]
    }
])