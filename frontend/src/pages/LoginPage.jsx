import React from "react";
import { useForm } from "react-hook-form";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
      <div className="page flex justify-center">
        <div className="space-y-6 mt-4">
          <div className="space-y-2">
            <h1 className="heading">Signin to your PopX account</h1>
            <p className="desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat,
              excepturi labore.
            </p>
          </div>
          <form className="space-y-3 ">
            <div className="relative">
              <label htmlFor="email" className="label">Email Address</label>
              <input type="text" className="input" id="email" placeholder="Enter email address" />
            </div>
            <div className="relative">
              <label htmlFor="password" className="label">Password</label>
              <input type="text" className="input" id="password" placeholder="Enter password" />
            </div>
            <button className="button  text-white bg-[#6c25ff] mt-2">Login</button>
          </form>
        </div>
      </div>
  );
}
