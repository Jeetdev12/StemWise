
import Login from "./Login";
import Browse from "./Browse";
import Home from "./Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GptSearch from "./GptSearch";
const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />,
        },
        {
            path: "/browse",
            element: <Browse />,
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/home",
            element: <Home />,
        },
        {
            path: "/gptmovies",
            element: <GptSearch/>
        }

    ]);
    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    );
};
export default Body;
