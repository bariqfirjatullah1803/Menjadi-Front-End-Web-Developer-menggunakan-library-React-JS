import {IoSearch} from "react-icons/io5";
import {DropdownMenu, Menu, MenuItem, Navbar, NavTitle} from "./components/Navbar";

function App() {
    return (
        <>
            <Navbar>
                <NavTitle>ReactFilm</NavTitle>
                <Menu>
                    <MenuItem>Home</MenuItem>
                    <DropdownMenu title={"Category"}>
                        <DropdownMenu.Item>Horror</DropdownMenu.Item>
                        <DropdownMenu.Item>Comedy</DropdownMenu.Item>
                        <DropdownMenu.Item>Action</DropdownMenu.Item>
                        <DropdownMenu.Item>Action</DropdownMenu.Item>
                        <DropdownMenu.Item>Action</DropdownMenu.Item>
                        <DropdownMenu.Item>Action</DropdownMenu.Item>
                    </DropdownMenu>
                    <div className={"relative w-1/3"}>
                        <input type={"text"}
                               className={"border-2 border-gray-200 rounded-full h-12 w-full px-5 text-base"}
                               placeholder={"Search movie, genre"}/>
                        <IoSearch className={"absolute right-4 top-3 text-2xl text-gray-200"}/>
                    </div>
                </Menu>
            </Navbar>
            <main className={"container mx-auto flex flex-col gap-10"}>
                <section>
                    <h1 className={"font-bold text-xl"}>Featured Movie</h1>
                    <div className={"grid grid-cols-3 gap-8 mt-6"}>
                        <div className={"h-72 bg-black rounded-3xl"}></div>
                        <div className={"h-72 bg-black rounded-3xl"}></div>
                        <div className={"h-72 bg-black rounded-3xl"}></div>
                    </div>
                </section>
                <section>
                    <h1 className={"font-bold text-xl"}>Browse</h1>
                    <div className={"grid grid-cols-5 gap-10 mt-6"}>
                        <div className={"h-80 bg-black rounded-3xl"}></div>
                        <div className={"h-80 bg-black rounded-3xl"}></div>
                        <div className={"h-80 bg-black rounded-3xl"}></div>
                        <div className={"h-80 bg-black rounded-3xl"}></div>
                        <div className={"h-80 bg-black rounded-3xl"}></div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default App
