export function Header() {
  const handleClick = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    window.location.href = "/";

    
  };
  return(

  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <a className="nav-link" href="/">Home</a>
      </li>
      <li className="nav-item dropdown">
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li>
          <a className="dropdown-item" href="./signup">Signup</a>
          </li>
          <li>
          <a className="dropdown-item" href="./login">Login</a>
          </li>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#" onClick={handleClick}>
         Logout</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="./movies/new">Add Movie</a>
      </li>
    </ul>
  </div>
</nav>

    
  )
}

