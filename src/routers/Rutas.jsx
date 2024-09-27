import { useRoutes } from "react-router";
import Home from "../pages/Home";
import MyPurchases from "../pages/MyPurchases";
import MyProfile from "../pages/MyProfile";
import NotFound from "../pages/NotFound";
import LogIn from "../pages/LogIn";
import SingIn from "../pages/SingIn";

const Rutas = () => {
  const rutas = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/miscompras",
      element: <MyPurchases />,
    },
    {
      path: "/miperfil",
      element: <MyProfile />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
    {
      path: "/iniciarsesion",
      element: <LogIn />,
    },
    {
      path: "/registrarse",
      element: <SingIn />,
    },
  ]);
  return rutas;
};

export default Rutas;
