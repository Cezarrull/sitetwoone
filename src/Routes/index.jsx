import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "./app.routes"

export function Router() {
    return(
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    )
}