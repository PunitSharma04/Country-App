import { createRoot } from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import Error from "./Components/Error";
import CountryDetails from "./Components/CountryDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement:<Error/>,
        children:[{
            path: "/",
            element: <Home />
        },
        {
            path: "/:country",
            element: <CountryDetails />
        }]
    },
]);

const root = createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
