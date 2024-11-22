import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "./app.routes"

import ScrollToTop from "./ScrollToTop"

export function Router() {
    return(
        <BrowserRouter>
            <ScrollToTop />
            <AppRouter />
        </BrowserRouter>
    )
}