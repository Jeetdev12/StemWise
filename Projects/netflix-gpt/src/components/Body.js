import React, { useEffect } from "react";
import Login from "./Login";
import Browser from "./Browser";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utilis/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utilis/UserSlice";

const Body = () => {
    const dispatch = useDispatch();
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />,
        },
        {
            path: "/browse",
            element: <Browser />,
        },
    ]);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(
                    addUser({
                        uid: uid,
                        email: email,
                        displayName: displayName,
                        photoURL,
                    })
                );
            } else {
                dispatch(removeUser());
            }
        });
    }, []);

    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    );
};

export default Body;
