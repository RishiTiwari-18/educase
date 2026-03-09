import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { api } from "../lib/axios";
import { toast } from "react-toastify";

export default function LoginPage() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true);

      const response = await api.post("/api/auth/login", data);

      if (response?.data?.success) {
        toast.success(response?.data?.message || "Login successful");
        navigate("/settings");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Login failed. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
      <div className="page flex justify-center">
        <div className="space-y-6 mt-4 w-full">
          <div className="space-y-2">
            <h1 className="heading">Signin to your PopX account</h1>
            <p className="desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat,
              excepturi labore.
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 ">
            <div className="relative">
              <label htmlFor="email" className="label">Email Address</label>
              <input
                type="text"
                className="input"
                id="email"
                placeholder="Enter email address"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Please enter a valid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>
            <div className="relative">
              <label htmlFor="password" className="label">Password</label>
              <input
                type="password"
                className="input"
                id="password"
                placeholder="Enter password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="button text-white bg-[#6c25ff] mt-2 disabled:opacity-60"
            >
              {isSubmitting ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
  );
}
