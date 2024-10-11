import { Routes, Route } from "react-router-dom";
import { MovieList, MovieDetails, PageNotFound, Search } from "../pages";

import Signup from "../auth/Signup";
import Signin from "../auth/Signin";

export const AllRoutes = () => {

    return(
        <Routes>
            <Route path="/" element={<MovieList apiPath="movie/now_playing"/>}/>
            <Route path="movie/:id" element={<MovieDetails/>}/>
            <Route path="movies/popular" element={<MovieList apiPath="movie/popular"/>}/>
            <Route path="movies/top" element={<MovieList apiPath="movie/top_rated"/>}/>
            <Route path="movies/upcoming" element={<MovieList apiPath="movie/upcoming"/>}/>
            <Route path="search" element={<Search/>}/>
            <Route path="signin" element={<Signin/>}/>
            <Route path="signup" element={<Signup/>}/>
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    )

}