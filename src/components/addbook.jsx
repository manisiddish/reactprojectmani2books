import { useDispatch, useSelector } from "react-redux";
import { addbook } from "./bookslice";
import "./addbook.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddbookCard() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [id, setId] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate(); // ✅ new hook

  const sumbitend = (e) => {
    e.preventDefault();

    if (!id.trim() || !title.trim() || !author.trim()) {
      alert("Please fill in all fields.");
      return;
    }

    dispatch(
      addbook({
        id,
        title,
        author,
        genre: "Historical Fiction",
        year: 1960,
        available: true,
        image: "https://covers.openlibrary.org/b/id/8228691-L.jpg",
        description:
          "A powerful story of racial injustice and moral growth seen through the eyes of young Scout Finch in the segregated American South.",
        rating: 4.8,
        pages: 281,
        language: "English",
        publisher: "J.B. Lippincott & Co.",
        isbn: "9780061120084",
      })
    );

    // Clear form fields
    setId("");
    setTitle("");
    setAuthor("");

    // ✅ Redirect to /brouse
    navigate("/brouse");
  };

  return (
    <>
      <h1 className="lll">Add Book</h1>
      <form onSubmit={sumbitend} className="addbook-form">
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder="Enter title"
        />
        <input
          type="text"
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
          placeholder="Author name"
        />
        <input
          type="text"
          onChange={(e) => setId(e.target.value)}
          value={id}
          placeholder="Enter id"
        />

        {/* ✅ No Link needed here */}
        <button type="submit">Add</button>
      </form>
    </>
  );
}

export default AddbookCard;
