import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home"
import Apps from "../Pages/Apps"
import Installation from "../Pages/Installation"


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,

    children:[
      {
        index: true,
        Component: Home,
      },
      {
        path:'/Apps',
        Component: Apps,
      },
      {
        path:'/Installation',
        Component: Installation,
      },
    ]
  }
])

export default router;