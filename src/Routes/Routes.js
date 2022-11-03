import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../Pages/Blog/Blog";
import CourseDetails from "../Pages/Courses/CourseDetails";
import Courses from "../Pages/Courses/Courses";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import Premium from "../Pages/Premium/Premium";
import PrivateRouter from "./PrivateRouter";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://code-course-server.vercel.app/course-details')
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('https://code-course-server.vercel.app/course-details')
            },
            {
                path: '/courses_details/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`https://code-course-server.vercel.app/course-details/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/premium/:id',
                loader: ({ params }) => fetch(`https://code-course-server.vercel.app/premium/${params.id}`),
                element: <PrivateRouter><Premium></Premium></PrivateRouter>
            }

        ]
    },
    {
        path: '/*',
        element: "Sorry! Page Not Found"
    }

])