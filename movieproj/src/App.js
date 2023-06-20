import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from "react";
import { Movie } from './Movie';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Routes,Route,Navigate, useNavigate } from "react-router-dom";
import { Home } from './Home';
import { AddMovie } from './AddMovie';
import { EditMovie } from "./EditMovie";
import { Trailer } from './Trailer';
function App() {
  const [movieList, setMovieList] = useState([]);
  const navigate = useNavigate();
  return (
    <div className="App">
        <AppBar position="static" color="secondary">
          <Toolbar>
            <Button onClick={() => navigate("/")} color="inherit">
              Home
            </Button>
            <Button onClick={() => navigate("/movies")} color="inherit">
              Movie
            </Button>
            <Button onClick={() => navigate("/movies/add")} color="inherit">
              AddMovie
            </Button>
            <Button onClick={() => navigate("/movies/trailer")} color="inherit">
              Trailer
            </Button>
            </Toolbar>
          </AppBar>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/movies" element={<Movie />} />
            <Route path="/movies/add" element={<AddMovie />} />
            <Route path="/movie/edit/:movieid" element={<EditMovie />} />
            <Route path="/movies/trailer" element={<Trailer />} />
          </Routes>
    </div>
  );
}

export default App;
