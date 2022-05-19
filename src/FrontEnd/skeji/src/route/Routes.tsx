import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { routeDictionary } from './routeDictionary';

const allRoutes = [
    routeDictionary
];

export const RoutesComponent = () => {
    let index = 0;
    return (
        <Routes>
            {
                allRoutes.map((routes) => {
                    let response : any[] = [];
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