import React from "react";
import { Link } from "react-router-dom";

export default function WelcomePage() {
  return (
    <div className="page flex justify-center items-end ">
      <div className="space-y-8">
        <div className="space-y-3 ">
          <h1 className="heading">Welcome to PopX</h1>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
            obcaecati nobis consectetur!
          </p>
        </div>
        <div className="flex flex-col gap-2 mb-6">
          <Link to="/register">
            <button className="button text-white bg-[#6c25ff]">
              Create Account
            </button>
          </Link>
          <Link to="/login">
            <button className="button text-black bg-[#cebafb]">
              Already Registered? Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
