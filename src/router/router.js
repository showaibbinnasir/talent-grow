import Blog from "../component/Blog/Blog";
import CheckOut from "../component/CheckOut/CheckOut";
import Courses from "../component/Courses/Courses";
import Home from "../component/Home/Home";
import Login from "../component/Login/Login";
import Register from "../component/Register/Register";
import RightSideDet from "../component/RightSideDet/RightSideDet";
import Default from "../layout/Default";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path : '/',
        element: <Default></Default>,
        loader: ()=> fetch('http://localhost:5000/catagories'),
        children: [
            {
                path : '/',
                loader: ()=> fetch('http://localhost:5000/catagories'),
                element: <Home></Home>
            },
            {
                path : '/all-courses',
                element : <Courses></Courses>,
                children: [
                    {
                        path : 'course/:id',
                        loader: ({params})=> fetch(`http://localhost:5000/courses/${params.id}`),
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
                loader: ({params})=> fetch(`http://localhost:5000/courses/${params.id}`),
                element: <CheckOut></CheckOut>
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