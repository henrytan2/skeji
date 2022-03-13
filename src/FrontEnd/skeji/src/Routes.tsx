import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/layout/Layout';
import Login from './components/login/Login';

interface IRoute {
    path: string;
    component: JSX.Element;
}

export const homeRouteKey = 'home';
export const loginRouteKey = 'login';

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

const allRoutes = [
    indexRoutes,
    loginRoutes,
];

export const RoutesComponent = () => {
    return (
        <Routes>
            {allRoutes.map((routes) => {
                let index = 0;
                for (const routeName in routes) {
                    const route = routes[routeName];
                    index++;
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    route.component
                                </Layout>
                            }
                        />
                    );
                }
            })}
        </Routes>
    )
}