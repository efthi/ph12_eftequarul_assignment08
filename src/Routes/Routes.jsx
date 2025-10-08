import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home"
import Apps from "../Pages/Apps"
import Installation from "../Pages/Installation"
import ErrorPage from '../Pages/ErrorPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    hydrateFallbackElement: <p>Loading...</p>,
    children:[
      {
        index: true,
        element: <Home />,
      },
      {
        path:'apps',
        element: <Apps />,
      },
      {
        path:'installation',
        element: <Installation />,
      },
      {
        path: "*",
        element: <ErrorPage />
      },
    ]
  }
])

export default router;