import { Counter } from './Counter';
import { Booklist } from './Booklist';
import { books } from './Booklist';
import { IconButton } from '@mui/material';
import { useState } from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
export function Book({books}){
  const [show,setShow] = useState(true);
  const styles = {
     color: books.rating > 8 ? "green":"red",
  };
  return(
    <div className="book-container">
        <img className="book-poster" src={books.poster} alt={books.name} />
        <div className="book-spec">
          <h1 className="book-title">{books.name}</h1>
          <p style={styles} className="book-rating">⭐{books.rating}</p>
        </div>
        <IconButton 
           aria-label="toggle"
           onClick={() => setShow(!show)}
           color = "primary">
            {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
         {show ? <p className="book-summary">{books.summary}</p> : null}
          <Counter />
      </div>
  );
}