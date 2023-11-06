import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../components/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login"
import MyPost from "../components/MyPost"
import MyBids from "../components/MyBids"
import BidRequests from "../components/BidRequests"
import AddJob from "../components/AddJob";
import Register from "../pages/Register/Register";
import Category from "../components/Category/Category";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "myPost",
        element: <MyPost></MyPost>
      },
      {
        path: "addJob",
        element: <AddJob></AddJob>
      },
      {
        path: "myBids",
        element: <MyBids></MyBids>
      },
      {
        path: "bidRequests",
        element: <BidRequests></BidRequests>
      },
      {
        path: "/",
        element: <Home></Home>
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
        element: <Category></Category>
      },
    ]
  },
]);
export default router