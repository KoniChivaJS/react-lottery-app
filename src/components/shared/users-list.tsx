import React from "react";
import { User } from "../../App";
import { UserItem } from "./user-item";
interface Props {
  className?: string;
  users: User[];
  updateUser: (user: User) => void;
  deleteUser: (id: number) => void;
}

export const UsersList: React.FC<Props> = ({
  className,
  users,
  updateUser,
  deleteUser,
}) => {
  return (
    <div className="p-4 bg-gray-50 rounded-lg shadow mt-5">
      <div className="grid grid-cols-6 font-semibold text-gray-600 border-b pb-2 mb-2">
        <div>#</div>
        <div>Name</div>
        <div>Date of Birth</div>
        <div>Email</div>
        <div>Phone number</div>
        <div>Actions</div>
      </div>

      {users.length === 0 ? (
        <div className="text-gray-600">No users found</div>
      ) : (
        users.map((user, index) => (
          <UserItem
            key={user.id}
            user={user}
            index={index}
            updateUser={updateUser}
            deleteUser={deleteUser}
          />
        ))
      )}
    </div>
  );
};
