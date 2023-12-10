import { createBrowserRouter } from "react-router-dom";
import { MainPage, VehicleDetailsPage } from '../pages'

export const APP_ROUTES = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />
    },
    {
        path: "/vehicle/:id",
        element: <VehicleDetailsPage />
    }
  ]);