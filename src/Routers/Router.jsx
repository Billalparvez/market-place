import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../components/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login"
import BidRequests from "../components/BidRequests"
import AddJob from "../components/AddJob";
import Register from "../pages/Register/Register";
import Category from "../components/Category/Category";
import JobDetails from "../components/JobDetails";
import MyPosted from "../components/MyPosted/MyPosted";
import MyBids from "../components/MyBids/MyBids";
import PrivateRoute from "../Provider/PrivateRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [

      {
        path:"myPosted",
        element:<PrivateRoute><MyPosted></MyPosted></PrivateRoute>,
        loader: () => fetch('https://online-marketplace-flame.vercel.app/category')
      },
      {
        path: "/addJob",
        element: <PrivateRoute><AddJob></AddJob></PrivateRoute>
      },
      {
        path: "/myBids",
        element: <PrivateRoute><MyBids></MyBids></PrivateRoute> ,
      },
      {
        path: "/bidRequests",
        element: <PrivateRoute><BidRequests></BidRequests></PrivateRoute>
      },
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('https://online-marketplace-flame.vercel.app/category')
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "register",
        element: <Register></Register>
      },
      {
        path: "/category",
        element: <Category></Category>,
      },
      {
        path: '/jobDetails/:id',
        element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
        loader: ({params}) => fetch(`https://online-marketplace-flame.vercel.app/category/${params.id}`)

      },
    ]
  },
]);
export default router