import React from "react";
import { NavItem } from "./app-navigation";
import { NavLink } from "react-router";

interface Props {
  className?: string;
  navigationItem: NavItem;
}

export const NavigationItem: React.FC<Props> = ({
  className,
  navigationItem,
}) => {
  return (
    <nav>
      <NavLink
        to={navigationItem.link}
        className=""
        onClick={navigationItem.onClick}
      >
        <h3 className="text-xl cursor-pointer hover:underline flex gap-2 items-center">
          {navigationItem.label}
          {navigationItem?.icon}
        </h3>
      </NavLink>
    </nav>
  );
};
