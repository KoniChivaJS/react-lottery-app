import React from "react";
import { Form } from "./components/shared/form";
import { UsersList } from "./components/shared/users-list";
import { Winners } from "./components/shared/winners";

export interface User {
  id: number;
  name: string;
  dateOfBirth: string;
  email: string;
  phoneNumber: string;
}

function App() {
  const [users, setUsers] = React.useState<User[]>([]);

  const createUser = (user: User) => {
    setUsers([...users, user]);
    saveUsersToLocalStorage([...users, user]);
  };

  const updateUser = (user: User) => {
    const updatedUsers = users.map((prev) =>
      prev.id === user.id ? user : prev
    );
    setUsers(updatedUsers);
    saveUsersToLocalStorage(updatedUsers);
  };

  const deleteUser = (id: number) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
    saveUsersToLocalStorage(updatedUsers);
  };

  const saveUsersToLocalStorage = (users: User[]) => {
    console.log("save ", users);
    localStorage.setItem("users", JSON.stringify(users));
  };

  React.useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
  }, []);

  return (
    <div className="mx-auto max-w-[1280px] p-4 rounded-xl shadow-md">
      <Winners users={users} />
      <Form createUser={createUser} />
      <UsersList
        users={users}
        updateUser={updateUser}
        deleteUser={deleteUser}
      />
    </div>
  );
}

export default App;
