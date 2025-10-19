import React from "react";
import { useForm } from "react-hook-form";
import { User } from "../App";

interface Props {
  className?: string;
  createUser: (user: User) => void;
}

export const Form: React.FC<Props> = ({ className, createUser }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data: any) => {
    createUser({
      id: Date.now(),
      ...data,
    });
    reset();
  };

  return (
    <div className={className}>
      <h2 className="text-xl font-bold">REGISTER FORM</h2>
      <h3 className="text-lg text-gray-400">Please fill in all the fields</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
        {/* name */}
        <div className="mt-4">
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            placeholder="Enter user name"
            {...register("name", { required: "Name is required" })}
            className="w-full p-2 border rounded-md"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">
              {String(errors.name.message)}
            </p>
          )}
        </div>

        {/* date */}
        <div className="mt-4">
          <label className="block mb-1 font-medium">Date of Birth</label>
          <input
            type="date"
            {...register("dateOfBirth", {
              required: "Date of birth is required",
              validate: (value) => {
                const today = new Date();
                const selectedDate = new Date(value);
                return selectedDate <= today || "Date cannot be in the future";
              },
            })}
            className="w-full p-2 border rounded-md"
          />
          {errors.dateOfBirth && (
            <p className="text-red-500 text-sm mt-1">
              {String(errors.dateOfBirth.message)}
            </p>
          )}
        </div>

        {/* email */}
        <div className="mt-4">
          <label className="block mb-1 font-medium">Email</label>
          <input
            placeholder="Enter email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Invalid email address",
              },
            })}
            className="w-full p-2 border rounded-md"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">
              {String(errors.email.message)}
            </p>
          )}
        </div>

        {/* phone */}
        <div className="mt-4">
          <label className="block mb-1 font-medium">Phone Number</label>
          <input
            type="tel"
            placeholder="+380XXXXXXXXX"
            {...register("phoneNumber", {
              required: "Phone number is required",
              pattern: {
                value: /^\+?\d{10,14}$/,
                message: "Invalid phone number",
              },
            })}
            className="w-full p-2 border rounded-md"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">
              {String(errors.phone.message)}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-36 mt-10 bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition "
        >
          Save
        </button>
      </form>
    </div>
  );
};
