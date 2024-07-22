import React from 'react';
import {Dropdown, Navbar} from "./components/Navbar.jsx";
import {IoSearch} from "react-icons/io5";
import {Outlet, useLocation} from "react-router-dom";

const App = () => {
    const location = useLocation();
    const pathName = location.pathname.split('/');
    const path = (pathName.length > 1) ? pathName[1] : 'home'
    return (
        <>
            {(path !== 'detail') &&
                <Navbar>
                    <Navbar.Title>ReactFilm</Navbar.Title>
                    <Navbar.Menu>
                        <Navbar.MenuItem>Home</Navbar.MenuItem>
                        <Dropdown title={"Category"}>
                            <Dropdown.Item>Action</Dropdown.Item>
                            <Dropdown.Item>Horror</Dropdown.Item>
                            <Dropdown.Item>Comedy</Dropdown.Item>
                        </Dropdown>
                        <div className={"relative w-1/3"}>
                            <input type={"text"}
                                   className={"border-2 border-gray-200 rounded-full h-12 w-full px-5 text-base focus-visible:!outline-black"}
                                   placeholder={"Search movie, genre"}/>
                            <IoSearch className={"absolute right-4 top-3 text-2xl text-gray-200"}/>
                        </div>
                    </Navbar.Menu>
                </Navbar>
            }
            <main className={`${(path !== 'detail') ? 'container' : ''} mx-auto flex flex-col gap-10 relative z-0`}>
                <Outlet/>
            </main>
        </>
    );
}

export default App;