import { createBrowserRouter } from "react-router-dom";
import Contact from "./Contact";
import About from "./About";
import HomePage from "../HomePage";
import Category from "./Category";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/contact", element: <Contact /> },
  { path: "/about", element: <About /> },
  { path: "/category/:slag", element: <Category /> },
]);

export default router;
