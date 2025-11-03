import React from "react";
import { NavigationItem } from "./navigation-item";
import { useAuthStore } from "../../store/auth-store";
import { useNavigate } from "react-router";
import { LogOut } from "lucide-react";

interface Props {
  className?: string;
}

export interface NavItem {
  label: string;
  link: string;
  onClick?: () => void;
  icon?: React.ReactNode
}

export const AppNavigation: React.FC<Props> = ({ className }) => {
  const { isAuthenticated, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
  };

  const navigateItems: NavItem[] = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "About",
      link: "/about",
    },
    {
      label: "Lottery",
      link: "/lottery",
    },
  ];

  if (isAuthenticated) {
    navigateItems.push({
      label: "Logout",
      link: "/login",
      onClick: handleLogout,
      icon: <LogOut size={16}/>
    });
  } else {
    navigateItems.push({
      label: "Login",
      link: "/login",
    });
  }

  return (
    <div
      className={`${className} w-full shadow-sm  flex justify-center items-center p-2 h-[50px] gap-5`}
    >
      {navigateItems.map((item, index) => (
        <NavigationItem
          key={index}
          navigationItem={item}
        />
      ))}
    </div>
  );
};
