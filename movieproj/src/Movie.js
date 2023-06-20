import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState,useEffect } from "react";
import { Counter } from './Counter';
import { useNavigate } from "react-router-dom";
import InfoIcon from "@mui/icons-material/Info";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { EditMovie } from './EditMovie';
import EditIcon from "@mui/icons-material/Edit";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
export function Movie({movies, id, deleteButton, editButton}){
   const [show, setShow] = useState({});
   const [open, setOpen] = useState(0);
   const [value, setValue] = useState(1);
   const handleClickOpen = (movieid) => {
    setOpen(movieid);
  };
  const handleClose = () => {
    setOpen(0);
  };
     const [movieList, setMovieList] = useState([]);
     const getMovies = () => {
        fetch("https://648c00628620b8bae7ec098a.mockapi.io/movies", {
        method: "GET",
    })
    .then((res) => res.json())
    .then((ms) => setMovieList(ms));
    };
  useEffect(() => getMovies(), []); 
  const navigate = useNavigate();
  function deleteMoviebyId(movieid){
    fetch(`https://648c00628620b8bae7ec098a.mockapi.io/movies/${movieid}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((res) => res.json())
            .then(() => {
                getMovies();
                handleClose();
            });
  }
    return(
      <div className="Align">
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 16 }}>
         {movieList.map((movies)=>(
          <Grid item xs={2} sm={4} md={4} key={movies.id}>
                <Card sx={{ maxWidth: 320 }}>
                <CardMedia
                     className="movie-post"
                     component="img"
                     height="100"
                     object-fit = "contain"
                     image={movies.poster}
                     alt={movies.name}
                />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                 <div className="movie-spec">
                  <h5 className="movie-topic">{movies.name}</h5>
                   <h5 className="movie-rating">⭐{movies.rating}</h5>
                 </div>
                 <IconButton
                       className="togprop"
                       aria-label="toggle"
                       onClick={() => {
                        setShow({
                            ...show,
                            [movies.id]: !show[movies.id]
                        })
                    }}
                       color="primary"
                 >
                {show[movies.id] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </IconButton>
                  {show[movies.id] ? <p className="summary">{movies.summary}</p>: null}
                      
                  <IconButton
                        className="delprop"
                        aria-label="delete"
                        color="error"
                        onClick={() => handleClickOpen(movies.id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                      <IconButton
                        className="editprop"
                        aria-label="delete"
                        color="secondary"
                        onClick={() => navigate(`/movie/edit/${movies.id}`)}
                        >
                        <EditIcon />
                      </IconButton>

                      <BottomNavigation
                           className="fav"
                           showLabels
                           value={value}
                           onChange={(event, newValue) => {
                           setValue(newValue);
                       }}
>
  <BottomNavigationAction icon={<FavoriteIcon />} />
</BottomNavigation>

                 </Typography>
              </CardContent>
               </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
        <Dialog
    open={!!open}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">
      {"Are you sure to delete this movie?"}
    </DialogTitle>
    <DialogActions>
      <Button onClick={handleClose}>Cancel</Button>
      <Button onClick={() => deleteMoviebyId(open)} autoFocus>
        Delete
      </Button>
    </DialogActions>
  </Dialog>
    </div> 
    );
}