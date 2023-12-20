import axios from "axios";
import { useState, useEffect } from "react";
import { Signup } from "./Signup"
import { Login } from "./Login.jsx"
import { LogoutLink } from "./LogoutLink.jsx"
import { Routes, Route } from "react-router-dom"
import { MoviesIndex } from "./MoviesIndex.jsx"
import { MoviesNew } from "./MoviesNew.jsx"
import { FavoritesIndex } from "./FavoritesIndex.jsx"
import { Modal } from "./Modal"
// import { MoviesShow } from "./MoviesShow"


export function Content() {
  const [movies, setMovies] = useState([]);
  const [isMoviesShowVisible, setIsMoviesShowVisible] = useState(false)
  const handleCreateMovie = (params, successCallback) => {
        console.log("handleCreateMovie", params);
        axios.post("http://localhost:3000/movies.json", params).then((response) => {
          setMovies([...movies, response.data]);
          successCallback();
        });
      };
  
  const handleIndexMovies = () => {
    // console.log('in handle index Products');
    // make my web request to api
    axios.get('http://localhost:3000/movies.json').then(response => {
      console.log(response.data.articles);
    //   Movies = response.data
      setMovies(response.data);

    });
  };
  
  const [favorites, setFavorites] = useState([])
  useEffect(handleIndexMovies, []);


  const handleIndexFavorites = () => {
        console.log("handleIndexFavorites");
        axios.get("http://localhost:3000/favorites.json").then((response) => {
          console.log(response.data);
          setFavorites(response.data);
        });
      };
    
      useEffect(handleIndexFavorites, []);

  const handleDestroyFavorite = (favorite) => {
    console.log("handleDestroyFavorite", favorite);
    axios.delete(`http://localhost:3000/favorites/${favorite}.json`).then((response) => {
    setFavorites(favorites.filter((f) => f.id !== favorite));
    });
};

const handleShowMovie = (movie) => {
    console.log("handleShowMovie", movie) 
    setIsMoviesShowVisible(true)
    setCurrentMovie(movie)
  }

  const handleClose = () => {
    console.log("handleClose")
    setIsMoviesShowVisible(false)
  }
  
return (
  <div>
      
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<LogoutLink />} />
      <Route path="/favorites" element={<FavoritesIndex favorites={favorites} onDestroyFavorite={handleDestroyFavorite}/> }/>
      <Route path="/" element={<MoviesIndex movies={movies} onShowMovie={handleShowMovie}/>}  />
      <Route path="/" element={<Modal show={isMoviesShowVisible} onClose={handleClose}/>} />
      {/* <Route path="/" element={<MoviesShow movie={currentMovie} />} /> */}
      <Route path="/movies/new" element={<MoviesNew onCreateMovie={handleCreateMovie}/> }/>
    </Routes>
  </div>
  )
}