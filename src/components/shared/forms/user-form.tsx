import React from "react";
import { useForm } from "react-hook-form";
import { User } from "../../../App";
import { Button } from "../../ui/button";
import InputField from "../../ui/input-field";

interface Props {
  className?: string;
  createUser?: (user: User) => void;
  user?: User;
  updateUser?: (user: User) => void;
}

export interface IUserForm {
  name: string;
  email: string;
  password: string;
  avatar: string;
}

export const Form: React.FC<Props> = ({
  className,
  createUser,
  updateUser,
  user,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IUserForm>({
    mode: "onChange",
  });

  const onSubmit = (data: any) => {
    if (createUser) {
      createUser({
        id: Date.now(),
        ...data,
      });
    }

    if (updateUser) {
      updateUser({
        id: Date.now(),
        ...data,
      });
    }

    reset();
  };

  React.useEffect(() => {
    if (user) {
      reset(user);
    } else {
      reset({
        avatar: "https://i.imgur.com/LDOO4Qs.jpg",
      });
    }
  }, [user]);

  return (
    <div className={className}>
      {createUser && (
        <>
          {" "}
          <h2 className="text-xl font-bold">REGISTER FORM</h2>
          <h3 className="text-lg text-gray-400">
            Please fill in all the fields
          </h3>
        </>
      )}
      <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
        <InputField
          label="Name"
          type="text"
          placeholder="Enter user name"
          register={register}
          name="name"
          error={errors.name}
          validation={{ required: "Name is required" }}
        />

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

        {/* Avatar */}
        <InputField
          label="Avatar URL"
          type="text"
          placeholder="Place URL of your avatar"
          register={register}
          name="avatar"
          error={errors.avatar}
          validation={{ required: "Avatar is required" }}
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
