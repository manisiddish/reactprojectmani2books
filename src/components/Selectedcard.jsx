import "./Selectedcard.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function SelectedCard() {
  const books = useSelector((state) => state.books);
  const { id } = useParams();

  // Find the book using the id from the URL
  const book = books.find((b) => String(b.id) === String(id));

  // Handle case where book is not found
  if (!book) {
    return <div className="main5">Book not found.</div>;
  }

  return (
    <div className="main5">
      <div>
        <img src={book.image} alt="img" />
      </div>
      <div>
        <h1>Title: {book.title}</h1>
        <p>Author: {book.author}</p>
        <p>Available: {book.available ? "Yes" : "No"}</p>
        <p>Genre: {book.genre}</p>
        <p>Language: {book.language}</p>
        <p>Pages: {book.pages}</p>
        <p>Rating: {book.rating}</p>
        <p>Year: {book.year}</p>
        <p>Description: {book.description}</p>
      </div>
       <Link to ={"/"}>Back to Home</Link>
    </div>
  );
}

export default SelectedCard;
