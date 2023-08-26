import React, { useEffect } from "react";
import "./index.css";
import { Home } from "./page/Home";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from "./page/LoginPage";
import SignupPage from "./page/SignupPage"
import CartPage from "./page/CartPage";
import CheckoutPage from "./page/CheckoutPage";
import ProductDetailPage from "./page/ProductDetailsPage";
import Protected from "./features/auth/components/Protected";
import { useDispatch, useSelector } from "react-redux";
import { selectLoggedInUser } from "./features/auth/authSlice";
import { fetchItemByUserAsync } from "./features/shoping-cart/cartSlice";
import PageNotFound from "./page/404";
import OrderSuccessPage from "./page/orderSuccessPage";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Protected><Home></Home></Protected>,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    
    element: <SignupPage></SignupPage>,
  },
  {
    path: "/cart",
    element: <Protected><CartPage></CartPage></Protected>,
  },
  {
    path: "/checkout",
    element: <Protected><CheckoutPage></CheckoutPage></Protected>,
  },
  {
    path: "/product-detail/:id",
    element: <Protected><ProductDetailPage></ProductDetailPage></Protected>,
  },
  {
    path: "/order-success/:id",
    element: <OrderSuccessPage></OrderSuccessPage>,
  },
  {
    path: "*",
    element: <PageNotFound/>,
  }
]);

function App() {

  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);

  useEffect(()=>{
     if (user) {
       dispatch(fetchItemByUserAsync(user.id))
     }
  },[dispatch, user]);
  return (
    <div className="App">
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
