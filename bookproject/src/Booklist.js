import { INITIAL_BOOK_LIST } from "./App";
import { Book } from "./Book";
export function Booklist()
{
    return(
       <div>
       <div className="book-lists">
          {INITIAL_BOOK_LIST.map((bk)=>(
            <Book books={bk} />
          ))}
       </div>
       </div>
    );
}