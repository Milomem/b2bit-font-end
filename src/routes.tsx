import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { Profile } from "./pages/profile";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/profile",
        element: <Profile/>,
    }
])