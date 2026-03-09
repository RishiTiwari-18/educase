import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { api } from "../lib/axios";
import { toast } from "react-toastify";

export default function RegisterPage() {
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

      const response = await api.post("/api/auth/register", {
        name: data.name,
        number: data.number,
        email: data.email,
        company: data.companyname,
        isagency: data.isagency === "yes",
        password: data.password,
      });

      if (response?.data?.success) {
        toast.success(response?.data?.message || "Account created successfully");
        navigate("/settings");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Registration failed. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page flex justify-center">
      <div className="space-y-6 mt-4 min-h-full w-full flex flex-col">
        <div>
          <h1 className="heading">Create your PopX account</h1>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-between flex-1"
        >
          <div className="space-y-6 ">
            <div className="relative">
              <label htmlFor="name" className="label">
                Full Name
              </label>
              <input
                type="text"
                className="input"
                id="name"
                placeholder="Enter Full Name"
                {...register("name", { required: "Full name is required" })}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div className="relative">
              <label htmlFor="number" className="label">
                Phone Number
              </label>
              <input
                type="text"
                className="input"
                id="number"
                placeholder="Enter Phone Number"
                {...register("number", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Please enter a valid 10-digit phone number",
                  },
                })}
              />
              {errors.number && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.number.message}
                </p>
              )}
            </div>
            <div className="relative">
              <label htmlFor="email" className="label">
                Email Address
              </label>
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
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="relative">
              <label htmlFor="password" className="label">
                Password
              </label>
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
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="relative">
              <label htmlFor="companyname" className="label">
                Company Name
              </label>
              <input
                type="text"
                className="input"
                id="companyname"
                placeholder="Enter Company name"
                {...register("companyname")}
              />
            </div>
            <div className="relative">
              <p className="desc">Are you an agency?</p>
              <div className="flex gap-4 mt-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    value="yes"
                    className="accent-[#6c25ff]"
                    {...register("isagency", {
                      required: "Please select an option",
                    })}
                  />
                  <span>Yes</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    value="no"
                    className="accent-[#6c25ff]"
                    {...register("isagency", {
                      required: "Please select an option",
                    })}
                  />
                  <span>No</span>
                </label>
              </div>
              {errors.isagency && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.isagency.message}
                </p>
              )}
            </div>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="button text-white bg-[#6c25ff] mb-4 disabled:opacity-60"
          >
            {isSubmitting ? "Creating account..." : "Create Account"}
          </button>
        </form>
      </div>
    </div>
  );
}
