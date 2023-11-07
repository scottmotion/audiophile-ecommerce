import { useEffect, useState } from "react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import { useLocalStorage } from "./hooks/useLocalStorage";

import Layout from "./pages/Layout";
import CategoryLayout from "./pages/CategoryLayout";
import ProductLayout from "./pages/ProductLayout";

import Home from "./pages/Home";
import Checkout from "./pages/Checkout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route
        path="headphones"
        element={<CategoryLayout category="headphones" />}
      ></Route>
      <Route path="headphones/:slug" element={<ProductLayout />} />

      <Route path="speakers" element={<CategoryLayout category="speakers" />} />
      <Route path="speakers/:slug" element={<ProductLayout />} />

      <Route
        path="earphones"
        element={<CategoryLayout category="earphones" />}
      />
      <Route path="earphones/:slug" element={<ProductLayout />} />
      <Route path="checkout" element={<Checkout />} />
    </Route>,
  ),
  {
    basename: "/audiophile-ecommerce/",
  },
);

function App() {
  const defaultCart = [
    { id: 1, quantity: 3 },
    { id: 2, quantity: 1 },
  ];
  const [cart, setCart] = useLocalStorage("cart", defaultCart);
  console.log("useLocalStorage cart: ", cart);

  // const [cart, setCart] = useState({ id: 1, quantity: 3 });

  // useEffect(() => {
  //   localStorage.setItem("cart", JSON.stringify(cart));
  // }, [cart]);

  // console.log("localstorage: ", localStorage.getItem("cart"));

  return <RouterProvider router={router} />;
}

export default App;
