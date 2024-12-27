import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ComplaintForm from "./components/ComplaintForm";
import AdminView from "./components/AdminView";
import StatusCheck from "./components/StatusCheck";

const router = createBrowserRouter([
    {
        path: "/",
        element: <ComplaintForm />,
    },
    {
        path: "/admin",
        element: <AdminView />,
    },
    {
        path: "/status-check",
        element: <StatusCheck />,
    },
    {
        path: "*",
        element: <h1>No Page Found</h1>
    }
]);

function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;
