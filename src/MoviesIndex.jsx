import axios from "axios";
import { useState } from "react"
import { useEffect } from "react";

export function MoviesIndex(props) {
  const [searchTerm, setSearchTerm] = useState("")
  const handleAddToFavorites = (movieId) => {
    console.log('add to favorites')
    console.log(movieId)
    axios.post("http://localhost:3000/favorites.json", {movie_id:movieId}).then(response => {
      console.log(response.data)
    })
 }
  
  const getActorsForFilms = () => {
    axios.get('http://localhost:3000/actors.json?movie=${movie.name}').then(response => {
      console.log(response.data);
      // Movies = response.data
      // setMovies(response.data);
    });
  }
  useEffect(getActorsForFilms, []);

  return (
    <div className="movie-container">
  <h1>All Movies</h1>
  <p>Search: <input type="text" value={searchTerm} onChange={(event) => {setSearchTerm(event.target.value)}} /></p>
  <div className="movie-list">
    {props.movies.filter(movie => movie.name.toLowerCase().includes(searchTerm.toLowerCase())).map(movie => (
      <div className="movie" key={movie.id}>
        <div className="movie-details">
          <h2>{movie.name}</h2>
          <img src={movie.image_url} alt={movie.name} />
          <p> {movie.description}</p>
          <p><strong>Starring:</strong> {movie.actors}</p> 
          {/* <p><strong>Username:</strong> {movie.comments.user_name && movie.comments.user_name[0]}</p>
          <p><strong>Comment:</strong> {movie.comments.text && movie.comments.text[0]}</p> */}
        </div>
        <button onClick={() => handleAddToFavorites(movie.id)} type="input">Add to Favorites</button> 
      </div>

    ))}
  </div>
</div>

)}