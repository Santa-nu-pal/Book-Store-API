#  Book Store API

This is a RESTful API for managing books in a bookstore. The API allows users to create, read, update, and delete books, along with features like pagination, sorting, authentication, and Docker support.

---

##  Live API URL

You can test the API live using the following URL:


> Replace `<your-deployment-url>` with your actual deployed URL.

---

##  Tech Stack

- Node.js
- Express.js
- MongoDB (with Mongoose)
- Docker & Docker Compose
- Postman (for testing)
- JWT Authentication

---
## Code Readability
I’ve added clear and concise comments throughout the codebase wherever necessary.
This helps in understanding the flow, functionality, and purpose of various parts of the project, making it easy for others to read, review, and maintain the code.


##  Authentication

All routes are protected. Use the login/signup endpoints to get a token and add it to headers like: Authorization: Bearer <your_token>

---

##  How to Use (Locally)

1. Clone the repo
2. Run `npm install`
3. Set your `.env` file
4. Start using: npm start


---

##  Running with Docker

Make sure you have Docker & Docker Compose installed. Then run:

```bash
docker compose up --build
That’s it — the backend will start on port 5000.

--------------------------------------------------------------------------------------------------------------------------------------


API Endpoints:-

 - Register a User -> POST /api/users/register
  - Body: 
          {
             "email": "testuser@gmail.com",
             "password": "testuser"
          }
----------------------------------------------------
Login a User:- 

 -POST /api/users/login
    Body: 
          {
             "email": "testuser@gmail.com",
             "password": "testuser"
          }
    Response: Returns JWT token
------------------------------------------------
 -Get All Books (with Pagination & Sorting)
    GET /api/books?page=1&limit=5&sortBy=price

Query Params:-

page (default: 1)

limit (default: 10)

sortBy: price or rating
-------------------------------
 -Get Book by ID
     GET /api/books/:id
-------------------------------
  -Create a Book
     POST /api/books
     Format {
            "Title": "Title",
            "Author": "name",
            "Category": "category",
            "Price": numeric value,
            "Rating": 4.5,
            "Published_Date": "2003-03-18"
            }

     Headers:-
     Authorization: Bearer <your_token>

------------------------------------------------

    -Update a Book
            PUT /api/books/:id
    
------------------------------------------------

    -Delete a Book
            DELETE /api/books/:id

------------------------------------------------


 Project Structure

  bookstore-api
├── controllers/
├── middleware/
├── models/
├── routes/
├── .env
├── Dockerfile
├── docker-compose.yml
└── server.js


        