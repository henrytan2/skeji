import Home from '../components/Home';
import Layout from '../components/layout/Layout';
import Login from '../components/login/Login';
import ProviderCreate from '../components/provider/ProviderCreate';
import ProviderCalendar from '../components/provider/ProviderCalendar';

enum RouteName {
    home,
    login,
    providerCreate,
    providerCalendar,
}

interface IRoute {
    path: string;
    component: JSX.Element;
}

type RouteDictionary = { [name in RouteName]: IRoute };

export const routeDictionary = {} as RouteDictionary;

routeDictionary[RouteName.home] = {
    path: '/',
    component: <Home />
}

routeDictionary[RouteName.login] = {
    path: '/login',
    component: <Login />
}

routeDictionary[RouteName.providerCreate] = {
    path: '/provider/create',
    component: <ProviderCreate />
}
routeDictionary[RouteName.providerCalendar] = {
    path: '/provider/calendar',
    component: <ProviderCalendar />
}