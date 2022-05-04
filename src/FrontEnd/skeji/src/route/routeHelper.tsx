import { routeDictionary } from "./routeDictionary";
import { RouteName } from "./routeName";

export const getUrlFromRouteName = (routeName: RouteName) => {
    let route = routeDictionary[routeName];
    let response = route.path;
    return response;
}

export const getUrlFromRouteNameWithQueryParams = (routeName: RouteName, queryParams: {[param: string]: string}) => {
    let route = routeDictionary[routeName];
    let response = route.path;
    Object.keys(queryParams).forEach((param) => {
        let paramValue = queryParams[param];
        response = response.concat(`?${param}=${paramValue}`);
    })
    return response;
}