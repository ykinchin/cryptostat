import Account from "../pages/Account";
import Registration from "../pages/Registration";
import Home from "../pages/Home";
import Currency from "../pages/Currency";
import Login from "../pages/Login";

export const routes = [
  {
    path: "/",
    element: <Home />,
    coins: null,
  },
  {
    path: "/account",
    element: <Account />,
  },
  {
    path: "/coin/:coinId",
    element: <Currency />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "/login",
    element: <Login />,
  },
];
