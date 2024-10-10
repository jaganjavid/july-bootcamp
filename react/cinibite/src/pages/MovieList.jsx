import React from 'react'
import useFetch from '../hooks/useFecth'


const MovieList = ({apiPath}) => {

  const { data:movies } = useFetch(apiPath);

  return (
    <main className='min-h-screen'>
      {movies.map((movie) => (
        <h1>{movie.original_title}</h1>
      ))}
    </main>
  )
}

export default MovieList