import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
} from "react-router-dom";
import { APP_ROUTES, BRAND_DISPLAY_NAME } from './constants';
import './index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
document.title = BRAND_DISPLAY_NAME
root.render(
    <RouterProvider router={APP_ROUTES}/>
);
