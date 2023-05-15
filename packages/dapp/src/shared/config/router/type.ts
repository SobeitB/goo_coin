import {RouteInstance} from "atomic-router";

export enum AppRoutes {
    LANDING = '/',
}

export interface RouteProps {
    path: AppRoutes;
    route: RouteInstance<any>;
}

export interface LinkItem {
    route: AppRoutes | string,
    title: string,
}