#Getting Started
Follow these instructions to set up and run the project on your local machine.

#Prerequisites
Make sure you have the following installed:

Node.js
npm
JSON Server
Installation


#Clone the Repository:

bash
Copy code
git clone https://github.com/your-username/book-catalog-app.git
cd book-catalog-app
Install Dependencies:

bash
Copy code
npm install
Start JSON Server:

JSON Server is used as a mock backend for this project. Run the following command to start the server:

bash
Copy code
npx json-server --watch db.json --port 5000
This will create a JSON Server running at http://localhost:5000.

#Start the React Application:

bash
Copy code
npm start
The app will be running on http://localhost:3000.