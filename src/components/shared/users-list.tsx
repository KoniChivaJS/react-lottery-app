import React, { useState, useMemo } from "react";
import { User } from "../../App";
import { UserItem } from "./user-item";
import { MoveUp, MoveDown } from "lucide-react";
import { SearchBar } from "./search-bar";

interface Props {
  className?: string;
  users: User[];
  updateUser: (user: User) => void;
  deleteUser: (id: number) => void;
}

type SortField = "name" | null;
type SortDirection = "asc" | "desc";

export const UsersList: React.FC<Props> = ({
  className,
  users,
  updateUser,
  deleteUser,
}) => {
  const [sortField, setSortField] = useState<SortField>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");
  const [filterQuery, setFilterQuery] = useState("");

  const toggleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      user.name.toLowerCase().includes(filterQuery.toLowerCase())
    );
  }, [users, filterQuery]);

  const sortedUsers = useMemo(() => {
    if (!sortField) return filteredUsers;

    return [...filteredUsers].sort((a, b) => {
      let aVal, bVal;

      if (sortField === "name") {
        aVal = a.name.toLowerCase();
        bVal = b.name.toLowerCase();
      } else {
        return 0;
      }

      if (aVal < bVal) return sortDirection === "asc" ? -1 : 1;
      if (aVal > bVal) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });
  }, [filteredUsers, sortField, sortDirection]);

  const renderSortIcon = (field: SortField) => {
    if (sortField !== field) return <MoveUp className="w-4 h-4 opacity-30" />;
    return sortDirection === "asc" ? (
      <MoveUp className="w-4 h-4 text-blue-600" />
    ) : (
      <MoveDown className="w-4 h-4 text-blue-600" />
    );
  };

  return (
    <div className={`p-4 bg-gray-50 rounded-lg shadow mt-5 ${className || ""}`}>
      <SearchBar onFilter={setFilterQuery} />

      <div className="grid grid-cols-6 font-semibold text-gray-600 border-b pb-2 mb-2">
        <div>id</div>

        <div
          className="flex items-center gap-1 cursor-pointer select-none"
          onClick={() => toggleSort("name")}
        >
          Name {renderSortIcon("name")}
        </div>

        <div className="flex items-center gap-1 cursor-pointer select-none">
          Role
        </div>

        <div>Email</div>
        <div>Avatar</div>
        <div>Actions</div>
      </div>

      {sortedUsers.length === 0 ? (
        <div className="text-gray-600">No users found</div>
      ) : (
        sortedUsers.map((user, index) => (
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
