export function FavoritesIndex(props) {
  const handleClick = (favoriteId) => {
      props.onDestroyFavorite(favoriteId);
    };
  return (
    <div>
      <h1>Favorites</h1>
    {props.favorites.map((favorite) => (
      <div key={favorite.id}>
        <p>{favorite.id}</p>
        <p>User: {favorite.user_id}</p>
        <p>Movie: {favorite.movie_id}</p>
        <button onClick={() => handleClick(favorite.id)}type="input">remove</button> 
      </div>
    ))}
    </div>
    );
  }