import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
export function EditMovie() {
  const { movieid } = useParams();
  const [movie, setMovie] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    console.log("test");
    getMoviebyId();
  }, []); 

  function getMoviebyId(){
    fetch(`https://648c00628620b8bae7ec098a.mockapi.io/movies/${movieid}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((bk) => setMovie(bk));
}
  function updateMovie(){
    fetch(`https://648c00628620b8bae7ec098a.mockapi.io/movies/${movieid}`, {
            method: "PUT",
            body: JSON.stringify({
                name: movie.name,
                poster: movie.poster,
                rating: movie.rating,
                summary: movie.summary
            }),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((res) => res.json())
            .then(() => navigate("/movies"));
        }

function EditMovieForm({ movie,setMovie }) {
  return (
    <div className="add-movie-form">
      <TextField
        id="name"
        label="Name"
        variant="filled"
        onChange={(event) => setMovie({
            ...movie,
            name: event.target.value
        })}
        value={movie.name}
      />
      <TextField
        id="poster"
        label="Poster"
        variant="filled"
        onChange={(event) => setMovie({
            ...movie,
            poster: event.target.value
        })}
        value={movie.poster}
      />
      <TextField
        id="rating"
        label="Rating"
        variant="filled"
        onChange={(event) => setMovie({
            ...movie,
            rating: event.target.value
        })}
        value={movie.rating}
      />
      <TextField
        id="summary"
        label="Summary"
        variant="filled"
        onChange={(event) => setMovie({
            ...movie,
            summary: event.target.value
        })}
        value={movie.summary}
      />
      <Button
        color="success"
        variant="contained"
        onClick={() => {
            updateMovie();
        }}
      >
        UPDATE
      </Button>
    </div>
  );
}
  return movie ? <EditMovieForm movie={movie} setMovie={setMovie}/> : "Loading...";
}
