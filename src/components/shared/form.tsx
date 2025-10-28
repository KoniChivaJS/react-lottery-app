import React from "react";
import { useForm } from "react-hook-form";
import { User } from "../../App";
import { Button } from "../ui/button";
import InputField from "../ui/input-field";

interface Props {
  className?: string;
  createUser?: (user: User) => void;
  user?: User;
  updateUser?: (user: User) => void;
}

export interface IForm {
  name: string;
  dateOfBirth: string;
  email: string;
  phoneNumber: string;
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
  } = useForm<IForm>({
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

        {/* Date of Birth */}
        <InputField
          label="Date of Birth"
          type="date"
          register={register}
          name="dateOfBirth"
          error={errors.dateOfBirth}
          validation={{
            required: "Date of birth is required",
            validate: (value: string) => {
              const today = new Date();
              const selectedDate = new Date(value);
              return selectedDate <= today || "Date cannot be in the future";
            },
          }}
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

        {/* Phone Number */}
        <InputField
          label="Phone Number"
          type="tel"
          placeholder="+380XXXXXXXXX"
          register={register}
          name="phoneNumber"
          error={errors.phoneNumber}
          validation={{
            required: "Phone number is required",
            pattern: {
              value: /^\+?\d{10,14}$/,
              message: "Invalid phone number",
            },
          }}
        />

        <Button text="Save" className="my-8" />
      </form>
    </div>
  );
};
