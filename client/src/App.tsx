import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

import Register from "./pages/Register";
import Login from "./pages/Login";

const App = () => {
  const Layout = () => (
    <>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </>
  );


  const router = createBrowserRouter([
    {
      path: "/home",
      element: <Layout />,
      children: [
        {
          path: "/home",
          element: <Home />,
        },
      ],
    },
    {
      path:"/",
      children:[
        {
          path:"/register",
          element : <Register />
        },
        {
          path:"/",
          element : <Login />
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
};
export default App;
