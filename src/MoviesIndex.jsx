import axios from "axios";
import { useState } from "react"
import { useEffect } from "react";
import { Modal } from "./Modal"

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

//   useEffect(getActorsForFilms, []);

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
          {movie.comments.map((comment) => {
            return (
                <div className="comment-container">
                    <p>{comment.user_name}</p>
                    <p>{comment.text}</p>
                </div>
            )
        })}
        {/* <button onClick={() => props.onShowMovie(movie)}>Add Comment</button> */}
          <p><strong>Starring:</strong> {movie.actors}</p> 
        </div>
        <button onClick={() => handleAddToFavorites(movie.id)} type="input">Add to Favorites</button> 
      </div>

    ))}
  </div>
</div>

)}