import React from "react";
import { Form } from "./components/form";
import { UsersList } from "./components/users-list";

export interface User {
  id: number;
  name: string;
  dateOfBirth: string;
  email: string;
  phoneNumber: string;
}

function App() {
  const [winners, setWinners] = React.useState<User[]>([]);
  const [users, setUsers] = React.useState<User[]>([]);

  const createUser = (user: User) => {
    setUsers([...users, user]);
  };

  return (
    <div className="mx-auto max-w-[1280px] p-4 rounded-xl shadow-md">
      <Form createUser={createUser} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
