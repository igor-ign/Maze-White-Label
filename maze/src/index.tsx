import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
} from "react-router-dom";
import { APP_ROUTES, BRAND_DISPLAY_NAME } from './constants';
import './index.scss';
import changePageFavicon from './scripts/set-favicon';

document.title = BRAND_DISPLAY_NAME
changePageFavicon()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <RouterProvider router={APP_ROUTES}/>
);
