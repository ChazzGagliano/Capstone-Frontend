export function FavoritesIndex(props) {
  const handleClick = (favoriteId) => {
      props.onDestroyFavorite(favoriteId);
    };
  return (
    <div>
      <h1>Favorites</h1>
      {props.favorites.length === 0 &&
        <h2> 
            No Movies!
            Add to List!
        </h2>
        }
      <div> 
        {props.favorites.map((favorite) => (
            
            <div key={favorite.id}>
            <h3>Movie: {favorite.movie.name}</h3>
            <img src={favorite.movie.image_url} />
            <p>{favorite.movie.description}</p>
            <p>Genre: {favorite.movie.category}</p>
            <button onClick={() => handleClick(favorite.id)}type="input">remove</button> 
            </div>
        ))}
        </div>
    </div>
    );
  }