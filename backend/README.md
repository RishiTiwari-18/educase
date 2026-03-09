# Backend (Node.js + Express)

This is the backend API for the assignment project. It handles:

- User registration
- User login
- Auth cookie creation
- Current user fetch (`get-me`) with middleware protection

## Tech Stack

- Node.js
- Express
- MongoDB + Mongoose
- JWT
- bcrypt
- cookie-parser
- cors

## Prerequisites

- Node.js 18+
- npm
- MongoDB connection string

## Environment Variables

Create `backend/.env`:

```env
PORT=3001
MONGO_URI=your_mongodb_connection_string
FRONTEND_URI=http://localhost:5173
JWT_SECRET=your_strong_random_secret
NODE_ENV=development
```

Notes:

- `FRONTEND_URI` supports comma-separated values for multiple origins.
- Example: `FRONTEND_URI=http://localhost:5173,https://your-app.vercel.app`

## Install

```bash
npm install
```

## Run In Development

```bash
npm run dev
```

## Run In Production

```bash
npm start
```

## Base URL

Local API base URL:

```text
http://localhost:3001
```

## API Routes

Auth routes are mounted under `/api/auth`:

- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/auth/get-me` (protected)

## Request/Response Notes

### Register

`POST /api/auth/register`

Expected body:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "secret123",
  "number": "9876543210",
  "company": "Acme",
  "isagency": true
}
```

### Login

`POST /api/auth/login`

Expected body:

```json
{
  "email": "john@example.com",
  "password": "secret123"
}
```

### Get Current User

`GET /api/auth/get-me`

- Requires valid `token` cookie.
- Returns user data without password.

## CORS And Cookies

This backend uses credentialed CORS and cookie-based auth.

- Frontend must send requests with `withCredentials: true`.
- Backend must allow frontend origin via `FRONTEND_URI`.
- In production, auth cookie is set with cross-site-safe options.

## Troubleshooting

- `No token provided`: Login again after deployment/config changes so a fresh cookie is issued.
- CORS error from Vercel frontend: Add your Vercel origin to `FRONTEND_URI` and redeploy backend.
