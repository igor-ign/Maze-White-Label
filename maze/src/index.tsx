import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
} from "react-router-dom";
import { APP_ROUTES } from './constants';
import './index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <RouterProvider router={APP_ROUTES}/>
);
