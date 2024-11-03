# ToDo-API

This is a simple RESTful API for managing to-do notes, built with Node.js, Express, and MongoDB. It allows users to create, read, update, and delete notes, making it a useful tool for keeping track of tasks or reminders.
Features:

POST /api/notes/ - Add a new note with title and content.
GET /api/notes/ - Retrieve all notes.
GET /api/notes/

- Retrieve a single note by ID.
  PUT /api/notes/
- Update a note by ID.
  DELETE /api/notes/
- Delete a note by ID.
  Technologies Used:

Node.js: JavaScript runtime for building the server.
Express: Minimalist web framework for defining API routes.
MongoDB: NoSQL database to store notes.
Mongoose: ODM for MongoDB, used for managing data interactions.
Getting Started: To run this project locally, clone the repository and follow these steps:

Install dependencies: npm install
Set up MongoDB: Configure a MongoDB connection string and add it to your .env file as MONGO_URI.
Run the server: node index.js
Example API Requests: Use Thunder Client/Postman to test the following endpoints:

POST /api/notes/ - Create a new note
GET /api/notes/ - Retrieve all notes
GET /api/notes/:id - Retrieve a note by ID
PUT /api/notes/:id - Update a note
DELETE /api/notes/:id - Delete a note
License: MIT
