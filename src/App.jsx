import {IoSearch} from "react-icons/io5";
import {Dropdown, Navbar} from "./components/Navbar";
import ListFilm from "./components/ListFilm.jsx";
import {useEffect, useState} from "react";
import axios from "./services/axios.js";

function App() {
    const [popular, setPopular] = useState([])
    const [popularData, setPopularData] = useState({
        data: [],
        genres: []
    })
    const [genres, setGenres] = useState([])
    useEffect(() => {

        (async () => {
            try {
                const data = await axios.get("/movie/popular")
                setPopular(data.data.results.slice(0, 3))
            } catch (e) {
                setPopular([])
            }
        })();

        (async () => {
            try {
                const data = await axios.get("/genre/movie/list")
                setGenres(data.data.genres)
            } catch (e) {
                setGenres([])
            }
        })();
    }, []);

    useEffect(() => {
        const data = {
            data: popular,
            genres: genres,
        }
        setPopularData(data)
    }, [popular, genres]);
    return (
        <>
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
            <main className={"container mx-auto flex flex-col gap-10 relative z-0"}>
                <section>
                    <ListFilm title={'Recommendations'} data={popularData} count={3}/>
                </section>
                <section>
                    <ListFilm title={'Browse'} data={[]} count={5}/>
                </section>
            </main>
        </>
    )
}

export default App
