import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";
import Cal from "./Cal";


const root = createRoot(document.getElementById('root'));
root.render(
    <div>
        <App />
        <Cal />
    </div>,
    document.body
);