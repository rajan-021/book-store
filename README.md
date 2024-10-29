## Getting Started
Follow these instructions to set up and run the project on your local machine.

## Prerequisites
Make sure you have the following installed:

1.Node.js
2.npm
3.JSON Server 

## Installation

1. Clone the Repository:

```bash
git clone https://github.com/your-username/book-catalog-app.git
cd book-catalog-app
```

2. Install Dependencies:
   
```bash
npm install
```

3. Start JSON Server:

JSON Server is used as a mock backend for this project. Run the following command to start the server:

```bash
npx json-server --watch db.json --port 5000
```
This will create a JSON Server running at http://localhost:5000.

4. Start the React Application:

```bash
npm start
```
The app will be running on http://localhost:3000.

## Features

List Books: Displays a list of books with their details (title, author, genre, year).

Add Book: Allows users to add a new book to the catalog.

Edit Book: Allows users to edit existing book details.

Delete Book: Users can delete books from the catalog.

Search and Filter: Allows users to search books by title or author.

Sort Books: Allows sorting books by title, author, or publication year.

Loading Indicators: Shows a spinner while data is being fetched.

Success/Error Messages: Displays toast notifications for successful or failed operations.


## Tech Stack

Frontend: ReactJS, TailwindCSS, React Router, Axios
Backend: JSON Server (mock backend)
Utilities: react-hot-toast (for notifications)

## Screenshots
![Home Page](https://asset.cloudinary.com/ddksmhojb/546e068baa1189ac07f410e8688acb45)

![Add Book](https://asset.cloudinary.com/ddksmhojb/6486d2887ed1558a3ea08a7d62f68ec7)

![Edit Book](https://asset.cloudinary.com/ddksmhojb/2910b0a7a185fe5d26a12cc2ad2392ed)

![Loading view](https://asset.cloudinary.com/ddksmhojb/4774464a46599c5b8bb0f68af75d462e)






