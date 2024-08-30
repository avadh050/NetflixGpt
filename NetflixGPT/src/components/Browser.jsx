
import Header from './Header'
import useNowPlayingMovies from './hooks/useNowPlayingMovies'
import usePopularMovies from './hooks/usePopularMovie'
import useTopRatedMovie from './hooks/useTopRatedMovie'
import useUpcomingMovies from './hooks/useUpcomingMovie'
import Maincontainer from './Maincontainer'
import Secondarycontainer from './Secondarycontainer'

const Browser = () => {
   
  useNowPlayingMovies()
  usePopularMovies()
  useUpcomingMovies()
  useTopRatedMovie()
  return (
    <>
    <Header/>
    <Maincontainer/>
    <Secondarycontainer/>
    </>
  )
}

export default Browser