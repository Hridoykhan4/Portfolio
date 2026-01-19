import { createBrowserRouter } from "react-router";
import App from "../App";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>
    }
])

export default Router;