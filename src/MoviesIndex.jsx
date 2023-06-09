import axios from "axios";
import { useState } from "react"

export function MoviesIndex(props) {
  const [searchTerm, setSearchTerm] = useState("")
  const handleAddToFavorites = (movieId) => {
    console.log('add to favorites')
    console.log(movieId)
    // event.preventDefault()
    // user fills out quantity (we will handle product_id)
    // const params = new FormData(event.target);
    axios.post("http://localhost:3000/favorites.json", {movie_id:movieId}).then(response => {
      console.log(response.data)
      // window.location.href = "/users/:id"

    })
  }
  
  return (
    <div>
    <h1>All Movies</h1>
    <p>Search: <input type="text" value={searchTerm} onChange={(event) => {setSearchTerm(event.target.value)}} /></p>
      {props.movies.filter(movie => movie.name.toLowerCase().includes(searchTerm.toLowerCase())).map(movie => (
        <div key={movie.id}>
          <h2>{movie.name}</h2>
          <img src={movie.image_url} />
          <p>Description: {movie.description}</p>
         <p>Category: {movie.category}</p>
        <button onClick={() => handleAddToFavorites(movie.id)}type="input">favorite</button> 
        </div>
      ))}
  </div>
  );
}