import {createRoot} from "react-dom/client";
import { StrictMode } from "react";
import './global.scss'
import AppRouter from "./app/routing/Router";

const rootElement = document.getElementById("root");
if (!rootElement) {
    throw new Error("No root element found");
}

const container = createRoot(rootElement);

container.render(
    <StrictMode>
        <AppRouter />
    </StrictMode>,
);

