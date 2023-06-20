import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { useState } from "react";
export function Counter(){
    const [like,setLike] = useState(0);
    const [dislike,setDislike] = useState(0);
    return(
       <div>
        <IconButton aria-label="like"
           onClick={() => setLike(like+1)}>
          <Badge badgeContent={like} color="primary">
          👍
          </Badge>
        </IconButton>

        <IconButton aria-label="dislike"
           onClick={() => setDislike(dislike+1)}>
          <Badge badgeContent={dislike} color="error">
          👎
          </Badge>
        </IconButton>
       </div>
    );
}