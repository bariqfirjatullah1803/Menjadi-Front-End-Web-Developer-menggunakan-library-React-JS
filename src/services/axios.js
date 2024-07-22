import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    timeout: 1000,
    headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzZkZDMzN2M1NTFmZjZhNDk0MDBmNjMxODE5NDBkZiIsIm5iZiI6MTcyMTYxODUyOS40ODg3MjQsInN1YiI6IjY2OWI0ZDYxYzY3ODg5NjQ3NDY4MjQzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hgV-fgywR5HyUsmadW0eBP3CsFOU8TzIrW6iG-sKFgk'}
});

export default instance;