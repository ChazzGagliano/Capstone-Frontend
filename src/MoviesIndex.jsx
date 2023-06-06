import axios from "axios";

export function MoviesIndex(props) {
  const handleAddToFavorites = (event) => {
    console.log('adding to favorite')
    event.preventDefault()
    // user fills out quantity (we will handle product_id)
    const params = new FormData(event.target);
    axios.post("http://localhost:3000/favorites.json", params).then(response => {
      console.log(response.data)
      // after, look at the shopping cart
      window.location.href = "/"

    })
  }
  
  return (
    <div>
    <h1>All Movies</h1>
      {props.movies.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.name}</h2>
          <img src={movie.image_url} />
          <p>Description: {movie.description}</p>
          <p>Category: {movie.category}</p>
          <form onSubmit={handleAddToFavorites}>
        <p> <input name="movie_id" type="hidden" defaultValue={props.movies.id} /></p>
        <button type="input">favorite</button>
      </form>
        </div>
        
      ))}
  </div>
  );
}