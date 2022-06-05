import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import Layout from '../components/layout/Layout';
import Login from '../components/login/Login';
import ProviderCreate from '../components/provider/ProviderCreate';
import ProviderCalendar from '../components/provider/ProviderCalendar';
import ClientCreate from '../components/client/ClientCreate';

interface IRoute {
    path: string;
    component: JSX.Element;
}

export const homeRouteKey = 'home';
export const loginRouteKey = 'login';
export const providerCreateKey = 'providerCreate';
export const providerCalendarKey = 'providerCalendar';
export const clientCreateKey = 'clientCreate';

export const indexRoutes: { [name: string]: IRoute } = {};
indexRoutes[homeRouteKey] = {
    path: '/',
    component: <Home />
} as IRoute

export const loginRoutes: { [name: string]: IRoute } = {};
loginRoutes[loginRouteKey] = {
    path: '/login',
    component: <Login />
} as IRoute

export const providerRoutes: { [name: string]: IRoute } = {};
providerRoutes[providerCreateKey] = {
    path: '/provider/create',
    component: <ProviderCreate />
}
providerRoutes[providerCalendarKey] = {
    path: '/provider/calendar',
    component: <ProviderCalendar />
}

export const clientRoutes: { [name: string]: IRoute } = {};
clientRoutes[clientCreateKey] = {
    path: '/client/create',
    component: <ClientCreate />
} as IRoute

const allRoutes = [
    indexRoutes,
    loginRoutes,
    providerRoutes,
    clientRoutes,
];

export const RoutesComponent = () => {
    let index = 0;
    return (
        <Routes>
            {
                allRoutes.map((routes) => {
                    let response = [];
                    for (const routeName in routes) {
                        const route = routes[routeName];
                        response.push(<Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout component={route.component} />
                            }
                        />);
                        index++;
                    }
                    return response;
                })}
        </Routes>
    )
}