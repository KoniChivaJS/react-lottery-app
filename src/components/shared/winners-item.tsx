import React from "react";
import { User } from "../../App";

interface Props {
  className?: string;
  user: User;
  deleteWinner: (id: number) => void;
}

export const WinnersItem: React.FC<Props> = ({
  className,
  user,
  deleteWinner,
}) => {
  return (
    <div
      key={user.id}
      className="bg-blue-600 text-white p-2 h-8 flex items-center rounded-md"
    >
      <p>{user.name}</p>
      <button
        type="button"
        onClick={() => deleteWinner(user.id)}
        className="ml-2"
      >
        X
      </button>
    </div>
  );
};
