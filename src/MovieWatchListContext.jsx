import { createContext, useState } from "react";

const MovieWatchListContext = createContext({
  watchListed: [],
  addMovieToWatchlist: () => {},
  removeWatchListedMovie: () => {},
});

export { MovieWatchListContext };

function WatchListProvider({ children }) {
  //Creating the context with initail values
  //Will add the functions just for autocompletion

  const [watchListedMovies, setWatchListedMovies] = useState([]);

  //This is what will be the model of the context
  let Context = {
    watchListed: watchListedMovies,
    addMovieToWatchlist,
    removeWatchListedMovie,
  };

  //The context controllers
  function addMovieToWatchlist(movie) {
    setWatchListedMovies([...watchListedMovies, movie]);
  }

  function removeWatchListedMovie(movie) {
    let filtered = watchListedMovies.filter((show) => show.id !== movie.id);
    setWatchListedMovies(filtered);
  }

  //The value prop provides the context for use in the components
  return (
    <MovieWatchListContext.Provider value={Context}>
      {children}
    </MovieWatchListContext.Provider>
  );
}
export default WatchListProvider;
