import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Products from "./components/Products";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import Users from "./components/Users";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/admin",
      element: <Layout />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Home /> },
        { path: "products", element: <Products /> },
        { path: "products/add", element: <AddProduct /> },
        { path: "products/edit/:id", element: <EditProduct /> },
        { path: "users", element: <Users /> },
        { path: "users/add", element: <AddUser /> },
        { path: "users/edit/:id", element: <EditUser /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
