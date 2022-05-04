import Home from '../components/Home';
import Login from '../components/login/Login';
import ProviderCreate from '../components/provider/ProviderCreate';
import ProviderCalendar from '../components/provider/ProviderCalendar';
import { RouteName, IndexRoutes, ProviderRoutes } from './routeName';

interface IRoute {
    path: string;
    component: JSX.Element;
}

type RouteDictionary = { [name in RouteName]: IRoute };

export const routeDictionary = {} as RouteDictionary;

routeDictionary[IndexRoutes.home] = {
    path: '/',
    component: <Home />
}

routeDictionary[IndexRoutes.login] = {
    path: '/login',
    component: <Login />
}

routeDictionary[ProviderRoutes.providerCreate] = {
    path: '/provider/create',
    component: <ProviderCreate />
}
routeDictionary[ProviderRoutes.providerCalendar] = {
    path: '/provider/calendar',
    component: <ProviderCalendar />
}