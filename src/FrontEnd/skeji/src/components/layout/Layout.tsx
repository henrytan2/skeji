import React from "react";
import { Link } from "react-router-dom";
import * as routes from "../../Routes";

const Layout = (props:any) => {
    let loginPath = routes.loginRoutes[routes.loginRouteKey].path;

        return (
            <nav className="bg-cyan-800">
                <div className="container mx-auto">
                    <div className="relative flex items-center h-16 justify-between">
                        <div className="text-white text-4xl ml-10 myfont text-left hover:cursor-pointer">
                            skeji
                        </div>
                        <Link className="text-right text-white border border-cyan-800 rounded text-xl myfont mx-10 hover:bg-cyan-700 py-1 px-3"
                            to={loginPath}>
                                Login
                        </Link>
                    </div>
                </div>
            </nav>
        );
}

export default Layout;