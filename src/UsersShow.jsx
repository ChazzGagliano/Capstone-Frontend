import { useState, useEffect } from "react";
import axios from "axios"
import { useParams } from "react-router-dom"

export function UsersShow() {
  const [user, setUser] = useState({})
  const params = useParams();
  const getShowUser = () => {
    console.log(params.id);
    console.log('getting individual recipe');
    axios.get(`http://localhost:3000/users/${params.id}.json`).then(response => {
      console.log(response.data)
      setUser(response.data)
    })
  }  

  useEffect(getShowUser, [])
  return (
    <div>
      <p>id: {user.id}</p>
      <p>name: {user.name}</p>
      <p>favorites: {user.favorites}</p>
    </div>
  )
}