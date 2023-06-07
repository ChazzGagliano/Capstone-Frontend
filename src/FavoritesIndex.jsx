export function FavoritesIndex(props) {
  const handleClick = (favoriteId) => {
      props.onDestroyFavorite(favoriteId);
    };
  return (
    <div>
      <h1>Favorites</h1>
    {props.favorites.map((favorite) => (
      <div key={favorite.id}>
        <h3>Movie: {favorite.movie.name}</h3>
        <img src={favorite.movie.image_url} />
        <p>Description: {favorite.movie.description}</p>
        <p>Genre: {favorite.movie.category}</p>
        <button onClick={() => handleClick(favorite.id)}type="input">remove</button> 
      </div>
    ))}
    </div>
    );
  }