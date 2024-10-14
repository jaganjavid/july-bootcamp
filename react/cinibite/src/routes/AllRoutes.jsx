import { Routes, Route } from "react-router-dom";
import { MovieList, MovieDetails, PageNotFound, Search } from "../pages";

import Signup from "../auth/Signup";
import Signin from "../auth/Signin";

export const AllRoutes = () => {

    return(
        <Routes>
            <Route path="/" element={<MovieList apiPath="movie/now_playing" title="Home"/>}/>
            <Route path="movie/:id" element={<MovieDetails/>}/>
            <Route path="movies/popular" element={<MovieList apiPath="movie/popular" title="Popular"/>}/>
            <Route path="movies/top" element={<MovieList apiPath="movie/top_rated" title="Top"/>}/>
            <Route path="movies/upcoming" element={<MovieList apiPath="movie/upcoming" title="Upcoming"/>}/>
            <Route path="search" element={<Search apiPath="search/movie"/>}/>
            <Route path="signin" element={<Signin/>}/>
            <Route path="signup" element={<Signup/>}/>
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    )

}