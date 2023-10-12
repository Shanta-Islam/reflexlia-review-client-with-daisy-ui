import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import ServicesPage from "../../Pages/Shared/Services/ServicesPage";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import UpdateReview from "../../Pages/MyReviews/UpdateReview";


const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home datasize={3}></Home>
        },
        {
          path: '/home',
          element: <Home datasize={3}></Home>
        },
        {
          path: '/services',
          element: <ServicesPage></ServicesPage>
        },
        {
          path: "/service/:id",
          loader: ({ params }) => fetch(`http://localhost:5000/service/${params.id}`),
          element: <ServiceDetails></ServiceDetails>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
          path: "/my-reviews",
          element: <MyReviews></MyReviews>
        },
        {
          path: "/MyReviews/UpdateReview/:id",
          element: <UpdateReview></UpdateReview>,
        },
      ]
    }
  ])
export default router;