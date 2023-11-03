import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

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
  return <RouterProvider router={router} />;
}

export default App;
