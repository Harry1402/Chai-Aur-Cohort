# BookBaaZar Backend

BookBaaZar is an online platform for buying and selling books. This backend service provides RESTful APIs for managing users, books, orders, and authentication.

## Features

- User registration and authentication (JWT)
- Book listing, creation, update, and deletion
- Order management
- Secure API endpoints
- MongoDB integration

## Tech Stack

- Node.js
- Express.js
- MongoDB & Mongoose
- JWT Authentication
- dotenv

## Getting Started

### Prerequisites

- Node.js (v14+)
- MongoDB

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Harry1402/BookBaaZar.git
   cd BookBaaZar/backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root of `backend` and add:
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```

4. Start the server:
   ```bash
   npm start
   ```

## API Endpoints

| Method | Endpoint           | Description                |
|--------|--------------------|----------------------------|
| POST   | /api/auth/register | Register a new user        |
| POST   | /api/auth/login    | Login and get JWT token    |
| GET    | /api/books         | List all books             |
| POST   | /api/books         | Add a new book             |
| PUT    | /api/books/:id     | Update a book              |
| DELETE | /api/books/:id     | Delete a book              |
| POST   | /api/orders        | Place a new order          |
| GET    | /api/orders        | Get user orders            |

## Folder Structure

```
backend/
├── controllers/
├── models/
├── routes/
├── middleware/
├── .env.example
├── server.js
└── README.md
```

## Contributing

Contributions are welcome! Please open issues or submit pull requests.

## License

This project is licensed under the MIT License.