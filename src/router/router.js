import Blog from "../component/Blog/Blog";
import CheckOut from "../component/CheckOut/CheckOut";
import Courses from "../component/Courses/Courses";
import ErrorPage from "../component/ErrorPage/ErrorPage";
import Home from "../component/Home/Home";
import Login from "../component/Login/Login";
import PrivateRouter from "../component/PrivateRouter/PrivateRouter";
import Register from "../component/Register/Register";
import RightSideDet from "../component/RightSideDet/RightSideDet";
import Default from "../layout/Default";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path : '/',
        element: <Default></Default>,
        loader: ()=> fetch('https://telant-grow-server.vercel.app/catagories'),
        errorElement : <ErrorPage></ErrorPage>,
        children: [
            {
                path : '/',
                loader: ()=> fetch('https://telant-grow-server.vercel.app/catagories'),
                element: <Home></Home>
            },
            {
                path : '/all-courses',
                element : <Courses></Courses>,
                children: [
                    {
                        path : 'course/:id',
                        loader: ({params})=> fetch(`https://telant-grow-server.vercel.app/courses/${params.id}`),
                        element:<RightSideDet></RightSideDet>
                    }
                    
                ]
            },
            {
                path : '/blog',
                element : <Blog></Blog>
            },
            {
                path : 'checkout/:id',
                loader: ({params})=> fetch(`https://telant-grow-server.vercel.app/courses/${params.id}`),
                element: <PrivateRouter><CheckOut></CheckOut></PrivateRouter>
            },
            {
                path : 'login',
                element : <Login></Login>
            },
            {
                path : 'register',
                element : <Register></Register>
            }
            
            
        ]
    }
])


export default router;