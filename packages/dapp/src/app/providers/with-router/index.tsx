

import { RouterProvider } from 'atomic-router-react';
import { router } from "shared/config/router";

export const withRouter = (component: () => React.ReactNode) => (() => (
    <RouterProvider router={router}>
        {component()}
    </RouterProvider>
));

export {RoutesView} from './config';