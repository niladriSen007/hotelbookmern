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
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
    {
      path:"/register",
      element : <Register />
    },
    {
      path:"/login",
      element : <Login />
    }
  ]);

  return <RouterProvider router={router} />;
};
export default App;
