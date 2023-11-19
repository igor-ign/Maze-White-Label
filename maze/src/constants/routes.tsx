import { createBrowserRouter } from "react-router-dom";
import { MainPage } from '../pages'

export const APP_ROUTES = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />
    },
  ]);