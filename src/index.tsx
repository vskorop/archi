import {render} from "react-dom";
import App from "./app/App";
import {BrowserRouter} from "react-router-dom";
import { ThemeProvider } from "app/providers/ThemeProvider";

import  "shared/config/i18/i18n";
render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root')
)
