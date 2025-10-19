import React from "react";
import { User } from "../App";

interface Props {
  className?: string;
  users: User[];
}

export const UsersList: React.FC<Props> = ({ className, users }) => {
  return (
    <div className="p-4 bg-gray-50 rounded-lg shadow mt-5">
      <div className="grid grid-cols-5 font-semibold text-gray-600 border-b pb-2 mb-2">
        <div>#</div>
        <div>Name</div>
        <div>Date of Birth</div>
        <div>Email</div>
        <div>Phone number</div>
      </div>

      {users.length === 0 ? (
        <div className="text-gray-600">No users found</div>
      ) : (
        users.map((user, index) => (
          <div key={user.id} className="grid grid-cols-5 border-b py-2">
            <div>{index + 1}</div>
            <div>{user.name}</div>
            <div>{user.dateOfBirth}</div>
            <div>{user.email}</div>
            <div>{user.phoneNumber}</div>
          </div>
        ))
      )}
    </div>
  );
};
