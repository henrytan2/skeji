import React from "react";
import { Link } from "react-router-dom";
import { getUrlFromRouteName } from "../../route/routeHelper";
import * as routes from "../../route/Routes";
import { IndexRoutes } from "../../route/routeName";

const Layout = (props: any) => {
    let loginUrl = getUrlFromRouteName(IndexRoutes.login);
    let homeUrl = getUrlFromRouteName(IndexRoutes.home);

    return (
        <>
            <nav className="bg-cyan-800">
                <div className="container mx-auto">
                    <div className="relative flex items-center h-16 justify-between">
                        <Link
                            className="text-white text-4xl ml-10 myfont text-left hover:cursor-pointer"
                            to={homeUrl}>
                            skeji
                        </Link>
                        <Link className="text-right text-white border border-cyan-800 rounded text-xl myfont mx-10 hover:bg-cyan-700 py-1 px-3"
                            to={loginUrl}>
                            Login
                        </Link>
                    </div>
                </div>
            </nav>
            {props.component}
        </>
    );
}

export default Layout;