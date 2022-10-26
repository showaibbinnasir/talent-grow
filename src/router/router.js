import Blog from "../component/Blog/Blog";
import Courses from "../component/Courses/Courses";
import Home from "../component/Home/Home";
import Default from "../layout/Default";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path : '/',
        element: <Default></Default>,
        children: [
            {
                path : '/',
                element: <Home></Home>
            },
            {
                path : '/all-courses',
                element : <Courses></Courses>
            },
            {
                path : '/blog',
                element : <Blog></Blog>
            }
        ]
    }
])


export default router;