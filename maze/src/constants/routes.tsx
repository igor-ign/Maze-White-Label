import { createBrowserRouter } from "react-router-dom";
import { CarDetailsPage, MainPage } from '../pages'

export const APP_ROUTES = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />
    },
    {
        path: "/vehicle/:id",
        element: <CarDetailsPage />
    }
  ]);