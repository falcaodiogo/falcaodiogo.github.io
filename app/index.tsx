"use client";

import { BrowserRouter } from "react-router-dom";
import App from "../app";

export default function Root() {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
}