import React from "react";
import { LoginForm } from "../forms/login-form";
import { User } from "../../../App";
import toast from "react-hot-toast";
import { authorizeUserService } from "../../../services/user-service";
import { useAuthStore } from "../../../store/auth-store";
import { useNavigate } from "react-router";

interface Props {
  className?: string;
}

export const Login: React.FC<Props> = ({ className }) => {
  const { login } = useAuthStore();
  const navigate = useNavigate();

  const handleUserLogin = async (user: Pick<User, "email" | "password">) => {
    try {
      const response = await authorizeUserService(user);
      await login(response.data);
      navigate("/");
      toast.success("Authorization successful");
    } catch (error: unknown) {
      toast.error("Failed to login user");
    }
  };
  return (
    <div className={className}>
      <LoginForm loginUser={handleUserLogin} />
    </div>
  );
};
