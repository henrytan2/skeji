import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function Play() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/play">
                <h1>Testing</h1>
            </Route>
        </Routes>
        </BrowserRouter>
    ); 
}