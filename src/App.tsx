import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import Layout from "./pages/Layout";

import Home from "./pages/Home";
import Headphones from "./pages/Headphones";
import Speakers from "./pages/Speakers";
import Earphones from "./pages/Earphones";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="headphones" element={<Headphones />} />
      <Route path="speakers" element={<Speakers />} />
      <Route path="earphones" element={<Earphones />} />
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
