import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import Navbar from "./Navbar";

const EditBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState({ title: "", author: "", genre: "", year: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://api-book-5rg1.onrender.com/books/${id}`)
      .then((response) => {
        setBook(response.data);
      })
      .catch((error) => console.error("Error fetching book data:", error));
  }, [id]);

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

    axios.put(`https://api-book-5rg1.onrender.com/books/${id}`, book)
      .then(() => {
        toast.success("Book Updated Successfully");
        navigate("/");
      })
      .catch((error) => console.error("Error updating book:", error));
  };

  return (
    <div>
        <div className="bg-slate-800 rounded mb-8"> 
        <Navbar />
        </div>
        <div className="flex justify-center items-center flex-col w-full">
      <h1 className="text-2xl font-bold">Edit Book</h1>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="mt-4 w-1/2">
        <input type="text" name="title" value={book.title} onChange={handleChange} className="block w-full p-2 mb-2 border" />
        <input type="text" name="author" value={book.author} onChange={handleChange} className="block w-full p-2 mb-2 border" />
        <input type="text" name="genre" value={book.genre} onChange={handleChange} className="block w-full p-2 mb-2 border" />
        <input type="text" name="year" value={book.year} onChange={handleChange} className="block w-full p-2 mb-2 border" />
        <button type="submit" className="bg-slate-800 text-white py-2 px-4 rounded hover:text-green-400">Update Book</button>
      </form>
      </div>
    </div>
  );
};

export default EditBook;
