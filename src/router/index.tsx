import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import Home from "../pages/home";
import Layout from "../layout";

export const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    )
  )