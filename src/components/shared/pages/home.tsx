import React from "react";
import { UsersList } from "../users-list";
import { User } from "../../../App";
import { Form } from "../forms/user-form";

interface Props {
  className?: string;
  createUser: (user: User) => void;
  users: User[];
  updateUser: (user: User) => void;
  deleteUser: (id: number) => void;
}

export const Home: React.FC<Props> = ({
  className,
  createUser,
  users,
  updateUser,
  deleteUser,
}) => {
  return (
    <div className="mt-5">
      <Form createUser={createUser} />
      <UsersList
        users={users}
        updateUser={updateUser}
        deleteUser={deleteUser}
      />
    </div>
  );
};
