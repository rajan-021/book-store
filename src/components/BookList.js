import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import Spinner from "./Spinner";
import Navbar from "./Navbar";

const BookList = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOption, setSortOption] = useState("title");

    useEffect(() => {
        axios.get("https://api-book-5rg1.onrender.com/books")
            .then((response) => {
                setBooks(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    const handleDelete = (id) => {
        axios.delete(`https://api-book-5rg1.onrender.com/books/${id}`)
            .then(() => {
                setBooks(books.filter((book) => book.id !== id));
                console.log(books);
                toast.error("Book deleted!");
            })
            .catch((error) => console.error("Error deleting book:", error));
    };


    const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedBooks = filteredBooks.sort((a, b) => {
        if (sortOption === "title") {
            return a.title.localeCompare(b.title);
        } else if (sortOption === "author") {
            return a.author.localeCompare(b.author);
        } else if (sortOption === "year") {
            return a.year - b.year;
        }
        return 0;
    });

    return (
        <div className="">
            <div className="bg-slate-800 rounded mb-5">
                <Navbar />
            </div>
            <div className="flex justify-center items-center mb-4">
                <h1 className="text-2xl font-bold pl-5">Book List</h1>
            </div>

            <div className="flex justify-center items-center flex-row">
                <div className=" w-1/2">
                    <div className="px-5 py-2  w-15">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            className="p-2 border w-full rounded"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <div className="px-5 py-2">
                        <label htmlFor="sort" className="mr-2 font-medium">Sort by:</label>
                        <select
                            id="sort"
                            className="p-2 border rounded"
                            value={sortOption}
                            onChange={(e) => setSortOption(e.target.value)}
                        >
                            <option value="title">Title</option>
                            <option value="author">Author</option>
                            <option value="year">Publication Year</option>
                        </select>
                    </div>
                </div>
            </div>

            {loading ? (
                <Spinner />
            ) : (
                <div className="w-full flex justify-center items-center">
                    <ul className="mt-2 w-1/2 ">
                        {sortedBooks.length > 0 ? (
                            sortedBooks.map((book) => (
                                <li key={book.id} className="border pl-5 p-2 mb-2 flex justify-between">
                                    <div>
                                        <p className="font-bold">{book.title}</p>
                                        <p>{book.author} - {book.genre} ({book.year})</p>
                                    </div>
                                    <div className="flex items-center">
                                        <Link to={`/edit/${book.id}`} className="mr-3 text-blue-500">Edit</Link>
                                        <button
                                            onClick={() => handleDelete(book.id)}
                                            className="text-red-500 border-slate-800 rounded-full pr-6"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </li>
                            ))
                        ) : (
                            <p className="text-gray-500 pl-5">No books found</p>
                        )}
                    </ul>
                </div>
            )}

            <div className="flex justify-center items-center w-full">
                <Link to="/add" className="mt-4 inline-block bg-slate-800 text-white py-2 px-4 rounded hover:text-green-400">
                    Add New Book
                </Link>
            </div>

        </div>
    );
};

export default BookList;
