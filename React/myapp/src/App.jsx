import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Posts from './pages/Posts'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <nav>
          <Link to="/">Home</Link>
          <Link to="/posts">Posts</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>

      </div>
    </BrowserRouter>
  )
}

export default App