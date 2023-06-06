import './App.css'
import { Content } from "./Content.jsx"
import { BrowserRouter } from 'react-router-dom'
import { Header } from "./Header.jsx"


function App() {
  return(
    <BrowserRouter>
      <Header/>
      <Content/>
    </BrowserRouter>
  )
}

export default App