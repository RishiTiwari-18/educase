import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import WelcomePage from "../pages/WelcomePage";
import SettingsPage from "../pages/SettingsPage";

export const routes = createBrowserRouter([
    {
        path: "/login",
        element: <LoginPage/>
    },
    {
        path: "/register",
        element: <RegisterPage/>
    },
    {
        path: "/",
        element: <WelcomePage/>
    },
    {
        path: "/settings",
        element: <SettingsPage/>
    }
])