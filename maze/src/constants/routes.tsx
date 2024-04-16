import { createBrowserRouter } from "react-router-dom";
import { MainPage, Search, VehicleDetailsPage } from '../pages'

export const APP_ROUTES = createBrowserRouter([
    {
        id: 'HOME',
        path: "/",
        element: <MainPage />
    },
    {
        id: 'VEHICLE_DETAILS',
        path: "/vehicle/:id",
        element: <VehicleDetailsPage />
    },
    {
        id: 'SEARCH_VEHICLES',
        path: "/search",
        element: <Search />
    }
  ]);