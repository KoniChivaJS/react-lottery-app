import React from "react";
import { NavItem } from "./app-navigation";
import { NavLink } from "react-router";

interface Props {
  className?: string;
  navigationItem: NavItem;
  handleLogout: () => void;
}

export const NavigationItem: React.FC<Props> = ({
  className,
  navigationItem,
  handleLogout,
}) => {
  return (
    <nav>
      <NavLink
        to={navigationItem.link}
        className=""
        onClick={navigationItem.onClick}
      >
        <h3 className="text-xl cursor-pointer hover:underline">
          {navigationItem.label}
        </h3>
      </NavLink>
    </nav>
  );
};
