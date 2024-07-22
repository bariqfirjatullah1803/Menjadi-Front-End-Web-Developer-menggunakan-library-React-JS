import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Detail from "./pages/Detail.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route element={<App/>}>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/detail/:id'} element={<Detail/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
)
