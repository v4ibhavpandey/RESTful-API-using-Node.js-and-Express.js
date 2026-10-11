# RESTful CRUD API — Node.js & Express.js

A personal learning project implementing a RESTful API using **Node.js** and **Express.js** that lists, adds, and deletes user records loaded from a local JSON file (`MOCK_DATA.json`). The update (PATCH) route is not implemented yet.

> **Note:** This is a beginner learning project. There is no database and no input validation, and it is not deployed anywhere. Run it locally to try it.

---

## What it does

- **GET** `/api/users` — Fetch all user records
- **GET** `/api/users/:id` — Fetch a single user by ID
- **POST** `/api/users` — Create a new user (also written back to `MOCK_DATA.json`; responds with `{ status: "pending" }`)
- **PATCH** `/api/users/:id` — Update a user (stub — returns `{ status: "pending" }`)
- **DELETE** `/api/users/:id` — Delete a user (removed from the in-memory array only; the JSON file is **not** updated, so the user comes back after a restart)
- **GET** `/users` — HTML list view of first names

Responses are JSON. Only DELETE returns a 404 (when the id does not exist); everything else returns 200, and `GET /api/users/:id` returns `null` for an unknown id.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Runtime | Node.js |
| Framework | Express.js |
| Data storage | `MOCK_DATA.json` (local flat file) |
| Body parsing | `express.urlencoded` (form-encoded bodies only, not JSON) |

---

## Project Structure

```
├── index.js          # Main Express server & all route handlers
├── MOCK_DATA.json    # Seed data (user records)
├── package.json
└── README.md
```

---

## Running locally

```bash
npm install
npm start
# Server starts at http://localhost:8000
```

---

## What I learned

- REST API design conventions (resource naming, HTTP verbs, status codes)
- Express.js routing, including `.route()` chaining
- Reading/writing to a JSON file as a simple persistence mechanism
- Testing endpoints by hand in Postman

---

## Limitations & next steps

- [ ] Fix DELETE so it saves to the file (the `fs.writeFile` call after `return` never runs)
- [ ] Accept JSON bodies with `express.json()` and return 201 and 404 where they belong
- [ ] Replace JSON file storage with a real database (MySQL / MongoDB)
- [ ] Complete the PATCH endpoint (currently returns stub)
- [ ] Add input validation and error handling middleware
- [ ] Add authentication (JWT)
- [ ] Write automated tests (Jest / Supertest)

---

*Built as a hands-on exercise to understand how REST routes work in Express.*
