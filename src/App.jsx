import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";

import MainView from "./components/MainView";

// layout
import Layout from "./components/Layout";

// import react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

export default function App() {
  // define router variable used by RouterProvider in return statement
  // createBrowserRouter will utilize loaders and improve app
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<MainView />} />
      </Route>
    )
  )

  return <RouterProvider router={router} />
}