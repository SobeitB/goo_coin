import { createRoutesView } from 'atomic-router-react';
import { MainPage } from 'pages/main';

import {
    landingRoute,
} from 'shared/config/router';


export const RoutesView = createRoutesView({
    routes: [
        { route: landingRoute, view: MainPage},
    ],
});