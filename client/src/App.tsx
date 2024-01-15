import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import SidebarIndex from "./components/SidebarIndex";

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
  ]);

  return <RouterProvider router={router} />;
};
export default App;
