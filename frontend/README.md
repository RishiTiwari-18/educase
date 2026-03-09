# Frontend (React + Vite)

This is the client app for the assignment project. It includes:

- Authentication forms (login/register)
- Protected route for account settings
- 404 page
- API integration with Axios
- Toast notifications with `react-toastify`

## Tech Stack

- React 19
- Vite
- React Router
- React Hook Form
- Tailwind CSS
- Axios

## Prerequisites

- Node.js 18+
- npm

## Environment Variables

Create `frontend/.env`:

```env
VITE_API_KEY=http://localhost:3001
```

For production, point this to your deployed backend URL.

## Install

```bash
npm install
```

## Run In Development

```bash
npm run dev
```

Default dev URL is usually `http://localhost:5173`.

## Build For Production

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

## Available Routes

- `/` - Welcome page
- `/register` - Register page
- `/login` - Login page
- `/settings` - Protected settings page (requires auth)
- `*` - 404 page

## Auth Flow

1. User logs in or registers.
2. Backend sets an HTTP-only cookie token.
3. Frontend calls `/api/auth/get-me` using `withCredentials: true`.
4. Protected route allows access to `/settings` only when authenticated.

## Notes

- Keep frontend and backend origins configured correctly for CORS.
- If frontend is deployed (for example on Vercel), backend `FRONTEND_URI` must include that exact origin.
