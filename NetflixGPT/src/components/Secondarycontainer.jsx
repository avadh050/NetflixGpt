import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const Secondarycontainer = () => {

  const movie = useSelector((store) => store?.movie) 

  return (
    <div className='bg-black '>
      <div className='relative -mt-52 pl-16 '>
      <MovieList title={"Now Playing"} movie={movie?.movies} />
      <MovieList title={"Popular"} movie={movie?.popularmovie} />
      <MovieList title={"Up Coming"} movie={movie?.upcomingmovie} />
      <MovieList title={"Top Rated"} movie={movie?.topratedmovie} />
      </div>
     
    </div>
  )
}

export default Secondarycontainer
