import ListFilm from "../components/ListFilm.jsx";
import {useEffect, useState} from "react";
import axios from "../services/axios.js";

function Home() {
    const [popular, setPopular] = useState([])
    const [topRated, setTopRated] = useState([])
    const [popularData, setPopularData] = useState({
        data: [],
        genres: []
    })
    const [topRatedData, setTopRatedData] = useState({
        data: [],
        genres: []
    })
    const [genres, setGenres] = useState([])
    useEffect(() => {

        (async () => {
            try {
                const data = await axios.get("/movie/popular")
                setPopular(data.data.results.slice(0, 5))
            } catch (e) {
                setPopular([])
            }
        })();
        (async () => {
            try {
                const data = await axios.get("/movie/top_rated?page=3")
                setTopRated(data.data.results.slice(0, 3))
            } catch (e) {
                setTopRated([])
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
        setPopularData({
            data: popular,
            genres: genres,
        })
    }, [popular, genres]);

    useEffect(() => {
        setTopRatedData({
            data: topRated,
            genres: genres,
        })
    }, [topRated, genres]);
    return (
        <>
            <section>
                <ListFilm title={'Top Rated'} data={topRatedData} count={3}/>
            </section>
            <section>
                <ListFilm title={'Recommendation'} data={popularData} count={5}/>
            </section>
        </>
    )
}

export default Home
