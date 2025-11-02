import React from "react";
import toast from "react-hot-toast";
import { AppNavigation } from "./components/shared/app-navigation";
import { Route, Routes } from "react-router";
import {
  About,
  Home,
  Login,
  Lottery,
  UserPage,
} from "./components/shared/pages";
import {
  createUserService,
  deleteUserService,
  getUsers,
  updateUserService,
} from "./services/user-service";

export interface User {
  id: number;
  name: string;
  role: string;
  email: string;
  avatar: string;
  updatedAt: string;
  creationAt: string;
  password: string;
}

function App() {
  const [users, setUsers] = React.useState<User[]>([]);

  const fetchUsers = async () => {
    try {
      const response = await getUsers();
      setUsers(response);
    } catch (error: unknown) {
      toast.error("Failed to fetch users");
    }
  };

  const createUser = async (user: User) => {
    try {
      await createUserService(user);
      fetchUsers();
    } catch (error: unknown) {
      toast.error("Failed to create user");
    }
  };

  const updateUser = async (user: User) => {
    try {
      await updateUserService(user.id, user);
      fetchUsers();
    } catch (error: unknown) {
      toast.error("Failed to update user");
    }
  };

  const deleteUser = async (id: number) => {
    try {
      await deleteUserService(id);
      fetchUsers();
    } catch (error: unknown) {
      toast.error("Failed to delete user");
    }
  };

  React.useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="mx-auto max-w-[1280px] p-4 rounded-xl shadow-md">
      <AppNavigation />
      <Routes>
        <Route
          index
          element={
            <Home
              createUser={createUser}
              users={users}
              updateUser={updateUser}
              deleteUser={deleteUser}
            />
          }
        />

        <Route path="about" element={<About />} />
        <Route path="lottery" element={<Lottery users={users} />} />
        <Route path="login" element={<Login />} />
        <Route path="user/:id" element={<UserPage />} />
      </Routes>
    </div>
  );
}

export default App;
