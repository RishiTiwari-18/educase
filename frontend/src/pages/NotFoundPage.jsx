import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="page flex flex-col items-center justify-center gap-4 text-center px-6">
      <h1 className="heading">404</h1>
      <p className="desc">The page you are looking for does not exist.</p>
      <Link to="/" className="button text-white bg-[#6c25ff]">
        Go Home
      </Link>
    </div>
  );
}
