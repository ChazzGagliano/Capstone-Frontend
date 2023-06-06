import axios from "axios";
import { useState, useEffect } from "react";
import { Signup } from "./Signup"
import { Login } from "./Login.jsx"
import { LogoutLink } from "./LogoutLink.jsx"
import { Routes, Route } from "react-router-dom"
import { MoviesIndex } from "./MoviesIndex.jsx"
import { UsersShow } from './UsersShow.jsx'
import { MoviesNew } from "./MoviesNew.jsx"




export function Content() {
  const [movies, setMovies] = useState([]);
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
      // Movies = response.data
      setMovies(response.data);

    });
  };
  
  useEffect(handleIndexMovies, []);

  
  
  return (
    <div>
       <LogoutLink/>
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<LogoutLink />} />
      <Route path="/" element={<MoviesIndex movies={movies} onShowMovie/>}  />
      <Route Path="/users/:id" element={<UsersShow />} />
      <Route path="/movies/new" element={<MoviesNew onCreateMovie={handleCreateMovie}/> }/>
    </Routes>
 

  </div>
  )
}