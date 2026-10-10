# RESTful CRUD API — Node.js & Express.js

A personal learning project implementing a RESTful API using **Node.js** and **Express.js** that performs full CRUD operations on user records stored in a local JSON file (`MOCK_DATA.json`).

> **Note:** This is a learning/practice project. Data is persisted in a flat JSON file — no database is used. It is not deployed to a production server.

---

## What it does

- **GET** `/api/users` — Fetch all user records
- **GET** `/api/users/:id` — Fetch a single user by ID
- **POST** `/api/users` — Create a new user (persisted to JSON file)
- **PATCH** `/api/users/:id` — Update a user (stub — returns `{ status: "pending" }`)
- **DELETE** `/api/users/:id` — Delete a user (removes from in-memory array)
- **GET** `/users` — HTML list view of first names

All endpoints return JSON responses with appropriate HTTP status codes (200, 201, 404).

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Runtime | Node.js |
| Framework | Express.js |
| Data storage | `MOCK_DATA.json` (local flat file) |
| Body parsing | `express.urlencoded` |

---

## Project Structure

```
├── index.js          # Main Express server & all route handlers
├── MOCK_DATA.json    # Seed data (user records)
├── package.json
```

---

## Running locally

```bash
npm install
node index.js
# Server starts at http://localhost:8000
```

---

## What I learned

- REST API design conventions (resource naming, HTTP verbs, status codes)
- Express.js routing with `.route()` chaining for clean handler separation
- Reading/writing to a JSON file as a simple persistence mechanism
- Postman-based endpoint testing and validation
- Structuring a Node.js project with separation of concerns (even at small scale)

---

## Limitations & next steps

- [ ] Replace JSON file storage with a real database (MySQL / MongoDB)
- [ ] Complete the PATCH endpoint (currently returns stub)
- [ ] Add input validation and error handling middleware
- [ ] Add authentication (JWT)
- [ ] Write automated tests (Jest / Supertest)

---

*Built as a hands-on exercise to understand RESTful backend architecture.*
