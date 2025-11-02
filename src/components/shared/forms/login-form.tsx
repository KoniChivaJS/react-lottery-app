import React from "react";
import { useForm } from "react-hook-form";
import { User } from "../../../App";
import { Button } from "../../ui/button";
import InputField from "../../ui/input-field";
import { IUserForm } from "./user-form";

interface Props {
  className?: string;
  loginUser: (user: Pick<User, "email" | "password">) => void;
}

export interface ILoginForm {
  email: string;
  password: string;
}

export const LoginForm: React.FC<Props> = ({ className, loginUser }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IUserForm>({
    mode: "onChange",
  });

  const onSubmit = (data: any) => {
    loginUser(data);
    reset();
  };

  return (
    <div className={className}>
      <h2 className="text-xl font-bold">LOGIN FORM</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
        {/* Email */}
        <InputField
          label="Email"
          type="email"
          placeholder="Enter email"
          register={register}
          name="email"
          error={errors.email}
          validation={{
            required: "Email is required",
            pattern: {
              value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              message: "Invalid email address",
            },
          }}
        />

        {/* password */}
        <InputField
          label="Password"
          type="password"
          placeholder="Enter password"
          register={register}
          name="password"
          error={errors.password}
          validation={{
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          }}
        />

        <Button text="Save" className="my-8" />
      </form>
    </div>
  );
};
