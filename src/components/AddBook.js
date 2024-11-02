import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import Navbar from "./Navbar";



const AddBook = () => {
  const [book, setBook] = useState({ title: "", author: "", genre: "", year: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!book.title || !book.author || !book.year) {
      setError("All fields are required");
      return;
    }
    if (isNaN(book.year) || book.year < 1000 || book.year > new Date().getFullYear()) {
      setError("Enter a valid year");
      return;
    }

    axios.post("https://api-book-5rg1.onrender.com/books", book)
      .then(() => {
        navigate("/");
        toast.success("Book added Successfully");
      })
      .catch((error) => {
        console.error("Error adding book:", error);
      });
  };

  return (
    <div>
      <div className="bg-slate-800 rounded">
        <Navbar />
      </div>
      <div className="flex items-center justify-center w-full flex-col">
        <h1 className="text-2xl font-bold mt-11">Add Book</h1>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit} className="mt-4 w-1/2">
          <input type="text" name="title" placeholder="Title" onChange={handleChange} className="block w-full p-2 mb-2 border" />
          <input type="text" name="author" placeholder="Author" onChange={handleChange} className="block w-full p-2 mb-2 border" />
          <input type="text" name="genre" placeholder="Genre" onChange={handleChange} className="block w-full p-2 mb-2 border" />
          <input type="text" name="year" placeholder="Year" onChange={handleChange} className="block w-full p-2 mb-2 border" />
          <button type="submit" className="bg-slate-800 text-white py-2 px-4 rounded hover:text-green-400">Add Book</button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
