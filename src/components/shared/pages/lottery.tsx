import React from "react";
import { Winners } from "../winners";
import { User } from "../../../App";

interface Props {
  className?: string;
  users: User[];
}

export const Lottery: React.FC<Props> = ({ className, users }) => {
  return (
    <div className={className}>
      <Winners users={users} />
    </div>
  );
};
