import React from "react";
import { useState } from "react";
import EmailInput from "../shared/EmailInput";
import PasswordInput from "../shared/PasswordInput";
import SingleClickButton from "../shared/SingleClickButton";
import HyperLink from "../shared/HyperLink";
import * as routes from "../../Routes";

export default function Login() {
    const [providerTabIsActive, setProviderTabIsActive] = useState(true);
    const [clientTabIsActive, setClientTabIsActive] = useState(false);
    const [providerEmail, setProviderEmail] = useState("");
    const [providerPassword, setProviderPassword] = useState("");
    const [clientEmail, setClientEmail] = useState("");
    const [clientPassword, setClientPassword] = useState("");

    let providerCreatePath = routes.providerRoutes[routes.providerCreateKey].path;
    // let clientCreatePath = routes.clientRoutes[routes.clientCreateKey].path;

    function handleProviderTabClick() {
        if (providerTabIsActive) {
            return;
        } else {
            setProviderTabIsActive(true);
            setClientTabIsActive(false);
        }
    }

    function handleClientTabClick() {
        if (clientTabIsActive) {
            return;
        } else {
            setProviderTabIsActive(false);
            setClientTabIsActive(true);
        }
    }

    const handleProviderEmailInput = (
        event: React.KeyboardEvent<HTMLInputElement>
    ) => {
        setProviderEmail((event.target as HTMLInputElement).value);
    };

    const handleProviderPasswordInput = (
        event: React.KeyboardEvent<HTMLInputElement>
    ) => {
        setProviderPassword((event.target as HTMLInputElement).value);
    };

    const handleClientEmailInput = (
        event: React.KeyboardEvent<HTMLInputElement>
    ) => {
        setClientEmail((event.target as HTMLInputElement).value);
    };

    const handleClientPasswordInput = (
        event: React.KeyboardEvent<HTMLInputElement>
    ) => {
        setClientPassword((event.target as HTMLInputElement).value);
    };



    return (
        <>
            <h1 className="text-3xl">Login</h1>
            <div className="grid grid-cols-5 gap-4">
                <div className="col-span-2 h-4 bg-teal-400"></div>
                <div className="col-span-2 h-4">
                    <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                        <ul
                            className="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4"
                            id="tabs-tab"
                            role="tablist"
                        >
                            <li className="nav-item" role="presentation">
                                <div
                                    className={
                                        "nav-link " +
                                        "block " +
                                        "font-medium " +
                                        "text-xs " +
                                        "leading-tight " +
                                        "uppercase " +
                                        "border-x-0 border-t-0 border-b-2 " +
                                        "px-6 " +
                                        "py-3 " +
                                        "my-2 " +
                                        "hover:hover:bg-gray-100 " +
                                        (providerTabIsActive
                                            ? "border-cyan-800"
                                            : "border-transparent")
                                    }
                                    id="tabs-home-tab"
                                    data-bs-toggle="pill"
                                    role="tab"
                                    aria-controls="tabs-home"
                                    aria-selected="true"
                                    onClick={handleProviderTabClick}
                                >
                                    <h1>Provider</h1>
                                </div>
                            </li>
                            <li className="nav-item" role="presentation">
                                <div
                                    className={
                                        "nav-link " +
                                        "block " +
                                        "font-medium " +
                                        "text-xs " +
                                        "leading-tight " +
                                        "uppercase " +
                                        "border-x-0 border-t-0 border-b-2 " +
                                        "px-6 " +
                                        "py-3 " +
                                        "my-2 " +
                                        "hover:hover:bg-gray-100 " +
                                        (clientTabIsActive
                                            ? "border-cyan-800"
                                            : "border-transparent")
                                    }
                                    id="tabs-profile-tab"
                                    data-bs-toggle="pill"
                                    role="tab"
                                    aria-controls="tabs-profile"
                                    aria-selected="false"
                                    onClick={handleClientTabClick}
                                >
                                    Client
                                </div>
                            </li>
                        </ul>
                        {providerTabIsActive && (
                            <div className="flex-auto justify-start">
                                <div>
                                    <EmailInput
                                        keyUpHandler={handleProviderEmailInput}
                                    ></EmailInput>
                                    <PasswordInput
                                        keyUpHandler={handleProviderPasswordInput}
                                        label="Password"
                                        placeholder="Password"
                                    ></PasswordInput>
                                    <HyperLink linkTo={providerCreatePath} text="Create Account" />
                                    <div className="flex justify-end">
                                        <SingleClickButton
                                            buttonText="Login"
                                            onClickHandler={
                                                () => {
                                                    console.log("A");
                                                }
                                            }/>
                                    </div>
                                </div>
                            </div>
                        )}
                        {clientTabIsActive && (
                            // todo form for clients
                            <div className="flex-auto justify-start">
                                <div>
                                    <EmailInput
                                        keyUpHandler={handleClientEmailInput}
                                    ></EmailInput>
                                    <PasswordInput
                                        keyUpHandler={handleClientPasswordInput}
                                        label="Password"
                                        placeholder="Password"
                                    ></PasswordInput>
                                    {/* <HyperLink linkTo={clientCreatePath} text="Create Account" /> */}
                                    <div className="flex justify-end">
                                        <SingleClickButton
                                            buttonText="Login"
                                            onClickHandler={
                                                () => {
                                                    console.log("A");
                                                }
                                            }/>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
