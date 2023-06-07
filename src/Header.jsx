export function Header() {
  const handleClick = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    window.location.href = "/";

    
  };
  return(
    <div>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="./signup">Signup</a></li>
        <li><a href="./login">Login</a></li>
        <a href="#" onClick={handleClick}>
         Logout
        </a>
        <li><a href="./users/:id">Account</a></li>
        <li>
        <a href="./movies/new">Add Movie</a> 
        </li>
      </ul>
    </div>
    
  )
}


