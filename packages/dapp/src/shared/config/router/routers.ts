
import { createHistoryRouter, createRoute } from 'atomic-router';
import { createBrowserHistory } from 'history';
import { AppRoutes, RouteProps } from './type';

export const landingRoute = createRoute();


export const routesNavigation: Record<AppRoutes, RouteProps> = {
    [AppRoutes.LANDING]: {
        path: AppRoutes.LANDING,
        route: landingRoute,
    },
};

export const routes: RouteProps[] = Object.entries(routesNavigation).map((route) => ({
    path: route[1].path,
    route: route[1].route,
}));

export const router = createHistoryRouter({
    routes,
});

const history = createBrowserHistory();
router.setHistory(history);