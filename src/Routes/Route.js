import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import AddService from '../pages/AddService/AddService'
import Blog from '../pages/Blog/Blog'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import MyReviews from '../pages/MyReviews/MyReviews'
import Register from '../pages/Register/Register'
import ServiceAndReview from '../pages/Services/ServiceAndReview'
import Services from '../pages/Services/Services'
import PrivateRoute from '../PrivateRoute/PrivateRoute'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/services',
        element: <Services></Services>,
      },
      {
        path: '/services/:id',
        element: <ServiceAndReview></ServiceAndReview>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: '/blog',
        element: <Blog></Blog>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/my-reviews',
        element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>,
      },
      {
        path: '/add-service',
        element: <PrivateRoute><AddService></AddService></PrivateRoute>,
      },
    ],
  },
])
