import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./pages/HomePage.jsx";
import Weather from "./pages/Weather.jsx";
import NotImplemented from "./pages/NotImplemented.jsx"


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route index={true} path="/" element={<HomePage />} />
            <Route path="/Login" element={<NotImplemented />} />
            <Route path="/Register" element={<NotImplemented />} />
            <Route path="/MoreJokes" element={<NotImplemented />} />
            <Route path="/Weather" element={<Weather />} />
            <Route path="/About" element={<NotImplemented />} />
        </Route>
    )
)

ReactDOM.createRoot(document.getElementById('root')).render(   
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
)